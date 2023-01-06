import React, {useState} from 'react';
import {Selection, SelectionWrapper,Underline} from "./styled"
import {EmployeeForm} from "./employeeForm";
import {EmployerForm} from "./employerForm";
import {AuthButton} from "@UI";

enum Section {
    "EMPLOYER" = "EMPLOYER",
    "EMPLOYEE" = "EMPLOYEE"
}

const forms = {
    EMPLOYER:<EmployerForm/>,
    EMPLOYEE:<EmployeeForm/>


}

export const RegisterForm = () => {
    const [currentSection, setCurrentSection] = useState<Section>(Section.EMPLOYEE)
    return (
        <>
            <SelectionWrapper>
                <Selection
                    color={currentSection === Section.EMPLOYEE ? 'true' : ''}
                    onClick={() => setCurrentSection(Section.EMPLOYEE)}
                >
                    Шукач
                </Selection>
                <Selection
                    color={currentSection === Section.EMPLOYER ? 'true' : ''}
                    onClick={() => setCurrentSection(Section.EMPLOYER)}
                >
                    Роботодавець
                </Selection>
                <Underline translate={currentSection === Section.EMPLOYER ? "yes" : "no"}/>
            </SelectionWrapper>
            {forms[currentSection]}
            <AuthButton>ЗАРЕЄСТРУВАТИСЯ</AuthButton>

        </>
    );
};

