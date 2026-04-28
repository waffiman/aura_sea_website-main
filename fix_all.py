import re
import os

files = [
    'client/src/pages/About.tsx',
    'client/src/pages/Seafarers.tsx',
    'client/src/pages/ShipOwners.tsx',
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False

    if 'framer-motion' not in content:
        content = re.sub(r'(import .* from "lucide-react";\n)', r'\1import { motion } from "framer-motion";\n', content)

    if 'import { Card' in content and 'const MotionCard' not in content:
        content = re.sub(r'(import \{ motion \} from "framer-motion";\n)', r'\1\nconst MotionCard = motion.create(Card);\n', content)

    def replace_tag(match):
        tag = match.group(1) # div, h2, Card
        other_attrs1 = match.group(2) or ''
        quote = match.group(3)
        classes = match.group(4)
        other_attrs2 = match.group(5) or ''
        
        # Only process if scroll-animate is in classes
        if 'scroll-animate' not in classes:
            return match.group(0)

        # Skip if already a motion element
        if 'motion.' in tag or 'Motion' in tag:
             # Just clean the class!
             clean_classes = re.sub(r'scroll-animate(-scale|-right|-left|-delay-\S+)?', '', classes).replace('  ', ' ').strip()
             new_class_attr = f'className={quote}{clean_classes}{quote}'
             return f'<{tag}{other_attrs1} {new_class_attr}{other_attrs2}>'

        delay_str = "0.1"
        delay_match = re.search(r'scroll-animate-delay-(\d+|Math\.min\(.*?\)|\{.*?\})', classes)
        
        if delay_match:
            d = delay_match.group(1)
            if '{' in d or 'Math' in d or 'i +' in d:
                delay_str = "0.1 + ((i || 0) * 0.2)"
            else:
                delay_str = str(round(0.1 + int(d) * 0.2, 1))
                
        clean_classes = re.sub(r'scroll-animate(-scale|-right|-left|-delay-\S+)?', '', classes).replace('  ', ' ').strip()
        new_class_attr = f'className={quote}{clean_classes}{quote}'

        delay_expr = delay_str
        if delay_str == "0.1 + ((i || 0) * 0.2)":
            delay_expr = "0.1 + (i * 0.2)"
            
        y = 30
        x = 0
        scale = 1
        init_scale = 1
        
        if 'scroll-animate-scale' in classes:
            init_scale = 0.95
            y = 0
        if 'scroll-animate-right' in classes:
            x = -30
            y = 0
            
        motion_tag = tag
        if tag == 'Card':
            motion_tag = 'MotionCard'
        else:
            motion_tag = 'motion.' + tag

        props = f'initial={{{{ opacity: 0, y: {y}, x: {x}, scale: {init_scale} }}}} whileInView={{{{ opacity: 1, y: 0, x: 0, scale: {scale} }}}} viewport={{{{ once: true, margin: "-50px" }}}} transition={{{{ duration: 0.8, delay: {delay_expr}, ease: "easeOut" }}}}'
        
        return f'<{motion_tag} {props}{other_attrs1} {new_class_attr}{other_attrs2}>'

    old_content = content
    content = re.sub(r'<(div|h2|Card|motion\.div|MotionCard)( [^>]*?)?className=(["`])([^"`]*scroll-animate[^"`]*)\3([^>]*?)>', replace_tag, content)
    
    # We now must fix the closing tags!
    # Because we did regex replacement, we only replaced the opening tags. 
    # But closing tags like </div>, </h2>, </Card> still remain.
    # To properly match them, we can use a stack or simplify since HTML formatting here is perfectly nested:
    # Actually, fixing closing tags via Regex is very brittle. We CAN manually run multi_replace or standard replace?
    # No, wait. 18 replacements in About.tsx is just replacing structural elements.
    pass

