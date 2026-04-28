const fs = require('fs');
const path = require('path');

const files = [
  'client/src/pages/About.tsx',
  'client/src/pages/Contact.tsx',
  'client/src/pages/Seafarers.tsx',
  'client/src/pages/ShipOwners.tsx',
  'client/src/pages/Vacancies.tsx'
];

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Add framer-motion import if not exists
    if (content.includes('scroll-animate') && !content.includes('import { motion } from "framer-motion"')) {
      content = content.replace(/import {([^}]*)} from "lucide-react";/, (match, imports) => {
        return `import {${imports}} from "lucide-react";\nimport { motion } from "framer-motion";`;
      });
      changed = true;
    }

    // Create MotionCard if Card is imported but MotionCard is not defined
    if (content.includes('import { Card') && !content.includes('const MotionCard = motion.create(Card)')) {
      content = content.replace(/import { motion } from "framer-motion";/, match => 
        match + '\nconst MotionCard = motion.create(Card);'
      );
      changed = true;
    }

    // Replace <Card ... scroll-animate ...> and its closing tag </Card>
    // We'll do this by finding the opening tags and then replacing the closing tags for the entire file if we found any opening tags.
    // This assumes all Cards in these files that have scroll-animate should be MotionCards.
    
    let hasMotionCards = false;
    content = content.replace(/<Card\s+([^>]*?)className=(["']{1,2}|`)([^>]*?)scroll-animate(-delay-\d+|-scale|-right|-left)?([^>]*?)(["']{1,2}|`)([^>]*?)>/g, (match, before, quote1, classBefore, delayType, classAfter, quote2, after) => {
      let delay = 0.1;
      let y = 40;
      let x = 0;
      let initScale = 1;
      
      if (delayType) {
        if (delayType.includes('delay')) {
          const d = parseInt(delayType.split('-').pop());
          delay = 0.1 + (d * 0.2);
        }
        if (delayType.includes('scale')) {
          initScale = 0.95;
          y = 0;
        }
        if (delayType.includes('right')) {
          x = -30;
          y = 0;
        }
        if (delayType.includes('left')) {
          x = 30;
          y = 0;
        }
      }
      
      const cleanClass = (classBefore + " " + classAfter).replace(/\s+/g, ' ').trim();
      hasMotionCards = true;
      changed = true;
      
      return `<MotionCard
  initial={{ opacity: 0, y: ${y}, x: ${x}, scale: ${initScale} }}
  whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: ${delay.toFixed(1)}, ease: "easeOut" }}
  ${before}className=${quote1}${cleanClass}${quote2}${after}>`;
    });

    if (hasMotionCards) {
      // This is a bit aggressive but given the file list, it's likely correct.
      // We only replace </Card> if it's NOT followed by more Card content that isn't MotionCard.
      // Actually, a safer way is to replace ALL </Card> with </MotionCard> in these specific files 
      // because the user wants all cards animated.
      content = content.replace(/<\/Card>/g, '</MotionCard>');
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated: ${file}`);
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
});

console.log('Animation fix complete.');
