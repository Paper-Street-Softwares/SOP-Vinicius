import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import WhatsappForm from "../interactives/WhatsappForm";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function FormNovoTemplate() {
  return (
    <SectionArea>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.form.minitag}
          title={content.texts.form.title}
          subtitle={content.texts.form.subtitle}
        />
        <MotionDivDownToUp className={`w-full flex justify-center`}>
          <WhatsappForm />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

export default FormNovoTemplate;
