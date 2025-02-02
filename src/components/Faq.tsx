import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <section className="pt-20">
            <Accordion type="single" collapsible className="w-full grid gap-2">
                {
                    Questions.map((item, idx) => {
                        return (
                            <AccordionItem
                                className={`bg-white/[1%] border border-white/5 overflow-hidden ${idx === 0 && 'rounded-t-xl'} backdrop-blur-xl  ${idx === Questions.length - 1 && 'rounded-b-xl'} px-10 py-2`}
                                key={idx}
                                value={`item${idx + 1}`}>
                                <AccordionTrigger className="text-lg no-underline hover:no-underline font-semibold">{item.title}</AccordionTrigger>
                                <AccordionContent className="text-xs font-light">
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </section>
    )
}


const Questions = [
    {
        title: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
        description: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
    },
    {
        title: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
        description: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
    },
    {
        title: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
        description: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
    },
    {
        title: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
        description: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
    },
    {
        title: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
        description: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
    },
    {
        title: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
        description: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
    },
    {
        title: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
        description: 'COMMUNITY BUILDING & DEVELOP﻿MENT',
    },
]