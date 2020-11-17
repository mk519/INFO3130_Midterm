
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employee Reference Check",
    pages: [
        {
            // Page 1
            questions: [
                {
                    //Question 1
                    name: "Question1",
                    type: "text",
                    title: "What is your relationship with the candidate?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 2
                    name: "Question2",
                    type: "text",
                    title: "How would you describe the candidate’s management style?",                   
                    placeHolder: "",
                    isRequired: true
                },
            ]
           
        }, {
            // Page 2
            questions: [
                {
                    //Question 3
                    name: "Question3",
                    type: "text",
                    title: "Did he / she effectively communicate their responsibilities in previous roles?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 4
                    name: "Question4",
                    type: "text",
                    title: "How did the candidate handle stress/conflict/pressure?",                   
                    placeHolder: "",
                    isRequired: true
                },
            ]
        }, {
            // Page 3
            questions: [
                {
                    //Question 5
                    name: "Question5",
                    type: "text",
                    title: "How would you describe the candidate’s communication/listening skills?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 6
                    name: "Question6",
                    type: "text",
                    title: "What qualities about the candidate make him/her a great leader? Are there any qualities that don't?",                   
                    placeHolder: "",
                    isRequired: true
                },
            ]
        },{
            // Page 4
            questions: [
                {
                    //Question 7
                    name: "Question7",
                    type: "text",
                    title: "What are the candidate's biggest strengths and areas for improvement?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 8
                    name: "Question8",
                    type: "text",
                    title: "Did the candidate ever supervise other employees? How effectively?",                   
                    placeHolder: "",
                    isRequired: true
                },
            ]
        },{
            // Page 5
            questions: [
                {
                    //Question 9
                    name: "Question9",
                    type: "text",
                    title: "What type of environment do you think the candidate would thrive in (describe culture, team, management, autonomy)?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 10
                    name: "Question10",
                    type: "text",
                    title: "If you were the hiring manager, would you hire the candidate?",                   
                    placeHolder: "",
                    isRequired: true
                },
            ]
        }
    ],
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });