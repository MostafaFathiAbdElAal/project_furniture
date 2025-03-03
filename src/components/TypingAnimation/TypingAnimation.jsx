'use client'
import { TypeAnimation } from "react-type-animation";
export default function TypingAnimation() {
    return <>
        <TypeAnimation
            sequence={[
              'وجهتك الموثوقة لخدمات نقل العفش داخل وخارج الرياض. نقدم حلولًا متكاملة تشمل النقل ، الفك، التركيب ، التغليف ، وفك وتركيب مكيفات السبلت. نلتزم بتقديم أفضل جودة بأيدي فريق محترف وبأسعار تنافسية',
            ]}

            role="article" wrapper="div" speed={45} className="after:text-white after:px-[2px] text-[#d6e6ff] font-bold text-center text-sm sm:text-lg md:text-right px-3"
          />
    </>
}