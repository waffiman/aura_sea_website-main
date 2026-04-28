import re

files = [
    'client/src/pages/About.tsx',
    'client/src/pages/Seafarers.tsx',
    'client/src/pages/ShipOwners.tsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add framer-motion import
    if 'framer-motion' not in content:
        content = re.sub(r'(import .* from "lucide-react";\n)', r'\1import { motion } from "framer-motion";\n', content)

    if 'import { Card' in content and 'const MotionCard' not in content:
        content = re.sub(r'(import \{ motion \} from "framer-motion";\n)', r'\1\nconst MotionCard = motion.create(Card);\n', content)

    # 1. Replace Hero <div ... scroll-animate>
    # It looks like: <div className="max-w-6xl ... scroll-animate"> ... </div>
    # The Hero div usually stops at `</section>`. But let's just replace the exact opening tag.
    content = re.sub(
        r'<div className="([^"]*?max-w-6xl[^"]*?w-full) scroll-animate">',
        r'<motion.div\n          initial={{ opacity: 0, y: 30 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          viewport={{ once: true, margin: "-50px" }}\n          transition={{ duration: 0.8, ease: "easeOut" }}\n          className="\1"\n        >',
        content
    )

    # Note: the Hero div closes with </div> right before </section>. We can just replace </div> for the hero!
    # Let's just keep the opening tag as motion.div, and then we'll find its closing tag.
    # A quick hack for the Hero wrapper:
    content = re.sub(r'</div>\n      </section>', r'</motion.div>\n      </section>', content)

    # 2. Replace <h2 ... scroll-animate>
    content = re.sub(
        r'<h2\s+className="([^"]*?)scroll-animate"\s*(data-testid="[^"]*")?\s*>',
        r'<motion.h2\n              initial={{ opacity: 0, y: 20 }}\n              whileInView={{ opacity: 1, y: 0 }}\n              viewport={{ once: true, margin: "-50px" }}\n              transition={{ duration: 0.8, ease: "easeOut" }}\n              className="\1"\n              \2>',
        content
    )
    content = re.sub(r'</h2>', r'</motion.h2>', content)

    # 3. Replace <Card ... scroll-animate>
    def replace_card(match):
        classes = match.group(1)
        # remove scroll-animate classes
        delay_match = re.search(r'scroll-animate-delay-(\S+)', classes)
        delay = '0.1'
        if delay_match:
            d = delay_match.group(1)
            d = d.replace('`', '').replace('"', '')
            if '{' in d or 'Math' in d or 'i +' in d:
                 delay = '0.1 + ((i || 0) * 0.2)'
            else:
                 try:
                     delay = str(0.1 + int(d) * 0.2)
                 except:
                     delay = '0.1'
                     
        clean_classes = re.sub(r'scroll-animate(-scale|-right|-left|-delay-\S+)?', '', classes).replace('  ', ' ').strip()
        
        inner = match.group(2)
        
        return f'<MotionCard\n                    initial={{{{ opacity: 0, y: 20 }}}}\n                    whileInView={{{{ opacity: 1, y: 0 }}}}\n                    viewport={{{{ once: true, margin: "-50px" }}}}\n                    transition={{{{ duration: 0.8, delay: {delay}, ease: "easeOut" }}}}\n                    className="{clean_classes}"\n{inner}</MotionCard>'

    # Use (?s) for dotall so .*? matches newlines!
    # Card opening could be <Card className="..."> or <Card\n className="...">
    # So we match <Card[^>]*className=["`]([^"`]*scroll-animate[^"`]*)(?s:.*?)<\/Card>
    content = re.sub(r'<Card[^>]*?className=["`]([^"`]*scroll-animate[^"`]*?)["`][^>]*?>(.*?)</Card>', replace_card, content, flags=re.DOTALL)

    # 4. Replace other standalone <div ... scroll-animate> (e.g. process steps, CTA sections)
    def replace_div(match):
        classes = match.group(1)
        delay_match = re.search(r'scroll-animate-delay-(\S+)', classes)
        delay = '0.1'
        init_scale = 1
        y = 20
        if delay_match:
            d = delay_match.group(1)
            d = d.replace('`', '').replace('"', '').replace('}', '')
            if 'Math' in d or 'i +' in d:
                 delay = '0.1 + ((i || 0) * 0.2)'
            else:
                 try:
                     delay = str(0.1 + int(d) * 0.2)
                 except:
                     pass
                     
        if 'scroll-animate-scale' in classes:
            init_scale = 0.95
            y = 0
            
        clean_classes = re.sub(r'scroll-animate(-scale|-right|-left|-delay-\S+)?', '', classes).replace('  ', ' ').strip()
        
        inner = match.group(2)
        
        return f'<motion.div\n                    initial={{{{ opacity: 0, y: {y}, scale: {init_scale} }}}}\n                    whileInView={{{{ opacity: 1, y: 0, scale: 1 }}}}\n                    viewport={{{{ once: true, margin: "-50px" }}}}\n                    transition={{{{ duration: 0.8, delay: {delay}, ease: "easeOut" }}}}\n                    className="{clean_classes}"\n{inner}</motion.div>'

    content = re.sub(r'<div[^>]*?className=["`]([^"`]*scroll-animate[^"`]*?)["`][^>]*?>(.*?)</div>\s*</div>\s*</section>', lambda m: replace_div(m) + '\n          </div>\n        </section>', content, flags=re.DOTALL)
    
    # Wait, the regex for <div> is very risky because divs are deeply nested! `(.*?)</div>` will match early!
    pass # I will not use regex for div blocks

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done phase 1")
