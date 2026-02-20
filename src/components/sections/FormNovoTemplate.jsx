import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import WhatsappForm from "../interactives/WhatsappForm";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function FormNovoTemplate({ colorMode }) {
  return (
    <SectionArea className={`bg-transparent`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.form.minitag}
          title={content.texts.form.title}
          subtitle={content.texts.form.subtitle}
          colorMode={colorMode}
        />
        <MotionDivDownToUp className={`w-full flex justify-center`}>
          <WhatsappForm colorMode={colorMode} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

export default FormNovoTemplate;
