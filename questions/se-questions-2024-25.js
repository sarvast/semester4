const seQuestions2024_25 = [
    {
        question: "Which of these is NOT a component of software configuration management?",
        options: [
            "(A) Configuration identification",
            "(B) Configuration control",
            "(C) Risk assessment",
            "(D) Configuration auditing"
        ],
        answer: "(C)",
        explanation: "SCM consists of identification, control, status accounting, and auditing. Risk assessment is a project management activity."
    },
    {
        question: "Which of these is a key advantage of object-oriented design?",
        options: [
            "(A) Increased hardware dependency",
            "(B) Difficulty in reusing code",
            "(C) Improved modularity and maintainability",
            "(D) Faster development without testing"
        ],
        answer: "(C)",
        explanation: "OOD promotes modularity through classes/objects and maintainability through encapsulation and inheritance."
    },
    {
        question: "Which of the following best describes abstraction in OOD?",
        options: [
            "(A) Focusing on unnecessary details",
            "(B) Hiding the internal implementation and showing only relevant features",
            "(C) Removing all logic from a class",
            "(D) Making code more complex"
        ],
        answer: "(B)",
        explanation: "Abstraction hides complex background details and exposes only necessary features to the user."
    },
    {
        question: "Polymorphism in OOD allows:",
        options: [
            "(A) Data to be stored in multiple locations",
            "(B) Objects to take many forms",
            "(C) Software to be less secure",
            "(D) Multiple classes to use the same variable name"
        ],
        answer: "(B)",
        explanation: "Polymorphism (poly = many, morph = forms) allows objects to be treated as instances of their parent class or take multiple forms (e.g., method overriding)."
    },
    {
        question: "What does inheritance allow in object-oriented design?",
        options: [
            "(A) Code duplication",
            "(B) Objects to behave randomly",
            "(C) One class to acquire properties of another class",
            "(D) Faster memory access"
        ],
        answer: "(C)",
        explanation: "Inheritance allows a child class to inherit fields and methods from a parent class, promoting code reuse."
    },
    {
        question: "Which of the following is NOT a basic principle of Object-Oriented Design?",
        options: [
            "(A) Encapsulation",
            "(B) Inheritance",
            "(C) Modularity",
            "(D) Linear Programming"
        ],
        answer: "(D)",
        explanation: "Linear Programming is a mathematical optimization technique, not an OOD principle (which includes Encapsulation, Inheritance, Polymorphism, Abstraction)."
    },
    {
        question: "What is 'encapsulation' in the context of software engineering?",
        options: [
            "(A) The practice of exposing all data and functions to other modules",
            "(B) Hiding the internal state and requiring all interaction to be performed through an object's methods",
            "(C) Writing all code in a single function",
            "(D) None of these"
        ],
        answer: "(B)",
        explanation: "Encapsulation bundles data and methods together and restricts direct access to the object's internal components."
    },
    {
        question: "The key benefit of early reviews in the software process is:",
        options: [
            "(A) Reduced testing time",
            "(B) Enhanced project marketing",
            "(C) Early detection of defects",
            "(D) Improved runtime performance"
        ],
        answer: "(C)",
        explanation: "Reviews allow defects to be found early in the lifecycle (requirements/design), where they are cheaper to fix."
    },
    {
        question: "Refinement is most commonly applied during which phase of software development?",
        options: [
            "(A) Deployment",
            "(B) Maintenance",
            "(C) Design",
            "(D) Testing"
        ],
        answer: "(C)",
        explanation: "Stepwise refinement is a top-down design strategy where a high-level function is broken down into detailed steps."
    },
    {
        question: "Which of the following is a benefit of using CASE tools?",
        options: [
            "(A) Increased code complexity",
            "(B) Higher cost of development",
            "(C) Improved productivity and software quality",
            "(D) Slower development process"
        ],
        answer: "(C)",
        explanation: "Computer-Aided Software Engineering (CASE) tools automate tasks to boost efficiency and quality."
    },
    {
        question: "Lower CASE tools are mainly used for:",
        options: [
            "(A) Requirement gathering",
            "(B) Project planning",
            "(C) Code generation, implementation, and testing",
            "(D) Feasibility analysis"
        ],
        answer: "(C)",
        explanation: "Lower CASE tools support the later stages of the SDLC like coding and testing. (Upper CASE supports Analysis/Design)."
    },
    {
        question: "Upper CASE tools are primarily used for:",
        options: [
            "(A) Coding and debugging",
            "(B) System design and analysis",
            "(C) Testing and deployment",
            "(D) Writing documentation only"
        ],
        answer: "(B)",
        explanation: "Upper CASE tools focus on the early planning, analysis, and design phases."
    },
    {
        question: "Which type of CASE tool is used during the early stages of the software development lifecycle?",
        options: [
            "(A) Lower CASE tools",
            "(B) Upper CASE tools",
            "(C) Middle CASE tools",
            "(D) All-purpose tools"
        ],
        answer: "(B)",
        explanation: "Upper CASE tools are used for requirements and design."
    },
    {
        question: "Which of the following is NOT a component of CASE tools?",
        options: [
            "(A) Code generator",
            "(B) Debugger",
            "(C) Data modeling tool",
            "(D) Video creating engine"
        ],
        answer: "(D)",
        explanation: "Video creation is a multimedia task, not a standard function of software engineering CASE tools."
    },
    {
        question: "The main purpose of CASE tools is to:",
        options: [
            "(A) Write hardware drivers",
            "(B) Support software development and maintenance",
            "(C) Compile programs faster",
            "(D) Replace software developers"
        ],
        answer: "(B)",
        explanation: "CASE tools provide automated support for software process activities."
    },
    {
        question: "What does CASE stand for?",
        options: [
            "(A) Computer-Aided System Engineering",
            "(B) Computer-Aided Software Engineering",
            "(C) Centralized Architecture for Software Engineering",
            "(D) Code and Script Editor"
        ],
        answer: "(B)",
        explanation: "Standard acronym."
    },
    {
        question: "Refinement in software engineering usually involves:",
        options: [
            "(A) Ignoring detailed requirements",
            "(B) Rewriting the software completely",
            "(C) Breaking down high-level design into more detailed components",
            "(D) Removing comments from code"
        ],
        answer: "(C)",
        explanation: "It is the process of elaborating on a high-level representation to create a more detailed one."
    },
    {
        question: "What is the primary purpose of the review process in software engineering?",
        options: [
            "(A) To compile the code",
            "(B) To test the hardware",
            "(C) To identify and fix errors early in the development cycle",
            "(D) To increase project cost"
        ],
        answer: "(C)",
        explanation: "Reviews (inspections, walkthroughs) aim to find errors before testing."
    },
    {
        question: "Which of the following is NOT a common type of software review?",
        options: [
            "(A) Code Review",
            "(B) Design Review",
            "(C) Walkthrough",
            "(D) Simulation Review"
        ],
        answer: "(D)",
        explanation: "Simulation is a validation method, not typically classified as a \"review\" technique like Walkthroughs or Inspections."
    },
    {
        question: "Why is documentation important for software maintenance?",
        options: [
            "(A) To increase file size",
            "(B) To reduce execution time",
            "(C) To help maintainers understand the system and make changes efficiently",
            "(D) To hide implementation logic"
        ],
        answer: "(C)",
        explanation: "Good documentation allows new developers to understand the code logic for updates or fixes."
    },
    {
        question: "Perfective maintenance aims to:",
        options: [
            "(A) Fix bugs",
            "(B) Adapt to new hardware",
            "(C) Improve or enhance functionality and performance",
            "(D) Archive the software"
        ],
        answer: "(C)",
        explanation: "Perfective maintenance involves modifications to improve performance or maintainability or add user-requested features."
    },
    {
        question: "Which of the following is a major challenge in software maintenance?",
        options: [
            "(A) Lack of development tools",
            "(B) Understanding and modifying someone else's code",
            "(C) Fast processors",
            "(D) High-speed networks"
        ],
        answer: "(B)",
        explanation: "Legacy code or code written by others without proper documentation is difficult to maintain."
    },
    {
        question: "Preventive maintenance is primarily focused on:",
        options: [
            "(A) Fixing urgent issues",
            "(B) Enhancing software security",
            "(C) Making changes to reduce future risks and improve maintainability",
            "(D) Improving screen resolution"
        ],
        answer: "(C)",
        explanation: "Preventive maintenance (Software Re-engineering) updates software to prevent future problems."
    },
    {
        question: "Adaptive maintenance is done when:",
        options: [
            "(A) New bugs are found",
            "(B) The software environment changes (e.g., OS, hardware, regulations)",
            "(C) Software is no longer needed",
            "(D) Software needs to be uninstalled"
        ],
        answer: "(B)",
        explanation: "Adaptive maintenance modifies the system to cope with changes in the software environment (platforms, OS)."
    },
    {
        question: "What does corrective maintenance involve?",
        options: [
            "(A) Adding new features",
            "(B) Fixing bugs and errors in the software",
            "(C) Improving documentation",
            "(D) Rewriting the entire software"
        ],
        answer: "(B)",
        explanation: "Corrective maintenance addresses discovered faults/bugs."
    },
    {
        question: "Which of the following is NOT a type of software maintenance?",
        options: [
            "(A) Corrective maintenance",
            "(B) Adaptive maintenance",
            "(C) Preventive maintenance",
            "(D) Directive maintenance"
        ],
        answer: "(D)",
        explanation: "The four standard types are Corrective, Adaptive, Perfective, and Preventive. \"Directive\" is not a standard type."
    },
    {
        question: "What is software maintenance?",
        options: [
            "(A) Writing code for the first time",
            "(B) Installing new hardware",
            "(C) Modifying software after delivery to correct faults or improve performance",
            "(D) Testing software before release"
        ],
        answer: "(C)",
        explanation: "Definition of maintenance according to IEEE."
    },
    {
        question: "Which of the following is NOT a level of testing?",
        options: [
            "(A) Unit Testing",
            "(B) Integration Testing",
            "(C) System Testing",
            "(D) Execution Testing"
        ],
        answer: "(D)",
        explanation: "\"Execution Testing\" is not a standard testing level (like Unit, Integration, System, Acceptance)."
    },
    {
        question: "What is the main objective of the implementation phase?",
        options: [
            "(A) To gather user requirements",
            "(B) To write user manuals",
            "(C) To deploy the software and make it operational",
            "(D) To perform alpha testing"
        ],
        answer: "(C)",
        explanation: "While \"Implementation\" often refers to Coding, in the context of this question's options (contrasting with Analysis/Design/Testing), option C referring to deployment/realization is the intended answer."
    },
    {
        question: "In software implementation, what is \"deployment\"?",
        options: [
            "(A) Writing test cases",
            "(B) Converting code into pseudocode",
            "(C) Delivering the software to the user environment",
            "(D) Deleting unused code"
        ],
        answer: "(C)",
        explanation: "Deployment is the release and installation of the software in the user's environment."
    },
    {
        question: "Which testing technique treats the software as a \"black box\"?",
        options: [
            "(A) Unit testing",
            "(B) White-box testing",
            "(C) Black-box testing",
            "(D) Regression testing"
        ],
        answer: "(C)",
        explanation: "Black-box testing focuses on inputs/outputs without looking at internal code structure."
    },
    {
        question: "What does unit testing focus on?",
        options: [
            "(A) Testing the complete system",
            "(B) Testing the user interface",
            "(C) Testing individual components or functions",
            "(D) Testing network performance"
        ],
        answer: "(C)",
        explanation: "Unit testing verifies the smallest testable parts of an application independently."
    },
    {
        question: "What is the main purpose of software testing?",
        options: [
            "(A) To improve hardware performance",
            "(B) To increase the software size",
            "(C) To rewrite the entire codebase",
            "(D) To identifying bugs and errors"
        ],
        answer: "(D)",
        explanation: "Testing aims to find defects/bugs to ensure quality."
    },
    {
        question: "How should a function ideally be designed?",
        options: [
            "(A) To do everything in one block",
            "(B) To perform a single, specific task",
            "(C) To be reused only once",
            "(D) To have multiple return statements in every case"
        ],
        answer: "(B)",
        explanation: "A function should have high cohesion, meaning it should perform one well-defined task."
    },
    {
        question: "Why is commenting your code important?",
        options: [
            "(A) It helps the compiler understand the code",
            "(B) It makes code run faster",
            "(C) It helps other developers understand your logic",
            "(D) It reduces file size"
        ],
        answer: "(C)",
        explanation: "Comments provide context and explanation for humans; compilers ignore them."
    },
    {
        question: "Which of the following is NOT recommended in good coding style?",
        options: [
            "(A) Writing long functions with hundreds of lines",
            "(B) Adding inline comments",
            "(C) Keeping functions small and focused",
            "(D) Using consistent formatting"
        ],
        answer: "(A)",
        explanation: "Long functions are hard to read, debug, and maintain. Good style promotes modularity."
    },
    {
        question: "Which of the following is a good practice for naming variables?",
        options: [
            "(A) Use single-letter variable names like x, y, z for everything",
            "(B) Use meaningful names like total Amount or customer List",
            "(C) Use all caps for all variables",
            "(D) Use random names to confuse others"
        ],
        answer: "(B)",
        explanation: "Meaningful names improve code readability."
    },
    {
        question: "What is the primary goal of following a good coding style?",
        options: [
            "(A) To make code run faster",
            "(B) To improve code readability and maintainability",
            "(C) To reduce the file size",
            "(D) To write fewer comments"
        ],
        answer: "(B)",
        explanation: "Style guides exist to make code easier for humans to read and maintain."
    },
    {
        question: "Which symbol is used to represent a relationship in an ER diagram?",
        options: [
            "(A) Oval",
            "(B) Diamond",
            "(C) Rectangle",
            "(D) Triangle"
        ],
        answer: "(B)",
        explanation: "Diamonds represent relationships, Rectangles represent Entities, Ovals represent Attributes."
    },
    {
        question: "In an ER diagram, a rectangle represents:",
        options: [
            "(A) Attribute",
            "(B) Relationship",
            "(C) Entity",
            "(D) Primary Key"
        ],
        answer: "(C)",
        explanation: "Entities are depicted as rectangles."
    },
    {
        question: "What does ER in ER Diagram stand for?",
        options: [
            "(A) Entity Reference",
            "(B) Entity Relationship",
            "(C) External Resource",
            "(D) Extended Record"
        ],
        answer: "(B)",
        explanation: "Entity Relationship Diagram."
    },
    {
        question: "In UML, an Actor is:",
        options: [
            "(A) A user or external system that interacts with the software",
            "(B) A Java class",
            "(C) A component in the architecture",
            "(D) A method that starts execution"
        ],
        answer: "(A)",
        explanation: "Actors represent roles played by users or external systems interacting with the subject system."
    },
    {
        question: "A Use Case Diagram is used to:",
        options: [
            "(A) Model the structure of a system",
            "(B) Show interactions between system components",
            "(C) Represent user interactions with the system",
            "(D) Depict database schemas"
        ],
        answer: "(C)",
        explanation: "Use Case diagrams capture functional requirements by showing interactions between Actors and Use Cases."
    },
    {
        question: "Which of the following is NOT a type of UML diagram?",
        options: [
            "(A) Class Diagram",
            "(B) E-R Diagram",
            "(C) Sequence Diagram",
            "(D) Use Case Diagram"
        ],
        answer: "(B)",
        explanation: "ER Diagrams belong to database modeling/structured analysis, while Class, Sequence, and Use Case are UML standards."
    },
    {
        question: "UML is primarily used for:",
        options: [
            "(A) Writing code",
            "(B) Creating user interfaces",
            "(C) Modeling and designing software systems",
            "(D) Database optimization"
        ],
        answer: "(C)",
        explanation: "Unified Modeling Language is a standard for visualizing and documenting software system designs."
    },
    {
        question: "In which step of SDLC actual programming of software code is done?",
        options: [
            "(A) Code Development and Documentation",
            "(B) Maintenance and Evaluation",
            "(C) Design",
            "(D) Analysis"
        ],
        answer: "(A)",
        explanation: "The Coding/Development phase involves actual programming."
    },
    {
        question: "Which one of the following is not a software process quality?",
        options: [
            "(A) Visibility",
            "(B) Timeliness",
            "(C) Productivity",
            "(D) Portability"
        ],
        answer: "(D)",
        explanation: "Portability is a quality of the software *product*, not the development *process* (like visibility or productivity)."
    },
    {
        question: "_______ is not suitable for accommodating any change?",
        options: [
            "(A) RAD Model",
            "(B) Waterfall Model",
            "(C) Build & Fix Model",
            "(D) Prototyping Model"
        ],
        answer: "(B)",
        explanation: "The Waterfall model is rigid and does not easily accommodate changes once a phase is completed."
    },
    {
        question: "Which diagram is primarily used in software design to represent the structure of a system?",
        options: [
            "(A) Sequence Diagram",
            "(B) Use Case Diagram",
            "(C) Class Diagram",
            "(D) Activity Diagram"
        ],
        answer: "(C)",
        explanation: "Class diagrams show the static structure (classes, attributes, methods, relationships)."
    },
    {
        question: "Which of the following is used to predict the effort as a function of LOC or FP?",
        options: [
            "(A) COCOMO",
            "(B) FP-based estimation",
            "(C) Both COCOMO and FP-based estimation",
            "(D) Process-based estimation"
        ],
        answer: "(C)",
        explanation: "Both methods (Constructive Cost Model and Function Point Analysis) are used for effort estimation."
    },
    {
        question: "Which of the following is not included in the total effort cost?",
        options: [
            "(A) Costs of lunch time food",
            "(B) Costs of support staff",
            "(C) Costs of networking and communications",
            "(D) Costs of air conditioning and lighting in the office space"
        ],
        answer: "(A)",
        explanation: "Personal lunch costs are generally not part of project effort costs (unlike overheads like AC, networking, and support)."
    },
    {
        question: "Which of the following is an incorrect activity for the configuration management of a software system?",
        options: [
            "(A) Change management",
            "(B) System management",
            "(C) Internship management",
            "(D) Version management"
        ],
        answer: "(C)",
        explanation: "Managing interns is HR/Project management, not Software Configuration Management."
    },
    {
        question: "Which of the following word correctly summarized the importance of software design?",
        options: [
            "(A) Quality",
            "(B) Complexity",
            "(C) Efficiency",
            "(D) Accuracy"
        ],
        answer: "(A)",
        explanation: "Design is the pivotal stage where quality is engineered into the software (\"Quality is designed in, not tested in\")."
    },
    {
        question: "An erroneous system state that results in an unexpected system behavior is acknowledged as?",
        options: [
            "(A) System failure",
            "(B) Human error or mistake",
            "(C) System error",
            "(D) System fault"
        ],
        answer: "(C)",
        explanation: "The internal incorrect state is an **Error**. This error may lead to a Failure (observable deviation)."
    },
    {
        question: "What is the primary purpose of using design patterns in software development?",
        options: [
            "(A) To increase code length",
            "(B) To create new programming languages",
            "(C) To solve common design problems",
            "(D) To generate UML diagrams"
        ],
        answer: "(C)",
        explanation: "Design patterns provide reusable solutions to common problems in software design."
    },
    {
        question: "Which of the following are parameters involved in computing the total cost of a software development project?",
        options: [
            "(A) Hardware and software costs",
            "(B) Effort costs",
            "(C) Travel and training costs",
            "(D) All of the mentioned"
        ],
        answer: "(D)",
        explanation: "Total cost includes hardware, software, human effort, travel, and training."
    },
    {
        question: "\"Consider a system where, a heat sensor detects an intrusion and alerts the security company.\" What kind of a requirement the system is providing?",
        options: [
            "(A) Functional",
            "(B) Non-Functional",
            "(C) Known Requirement",
            "(D) None of the mentioned"
        ],
        answer: "(A)",
        explanation: "It describes a function/behavior of the system (detecting and alerting)."
    },
    {
        question: "Which feature of OOP indicates code reusability?",
        options: [
            "(A) Inheritance",
            "(B) Polymorphism",
            "(C) Encapsulation",
            "(D) Abstraction"
        ],
        answer: "(A)",
        explanation: "Inheritance allows new classes to reuse code from existing classes."
    },
    {
        question: "The agile software development model is built based on",
        options: [
            "(A) Linear Development",
            "(B) Incremental Development",
            "(C) Iterative Development",
            "(D) Both Incremental and Iterative Development"
        ],
        answer: "(D)",
        explanation: "Agile combines iterative (repeating cycles) and incremental (adding functionality) approaches."
    },
    {
        question: "COCOMO stands for",
        options: [
            "(A) Calculated Cost Model",
            "(B) Computer Cost Model",
            "(C) Constructive Cost Model",
            "(D) None of These"
        ],
        answer: "(C)",
        explanation: "Constructive Cost Model."
    },
    {
        question: "SDLC stands",
        options: [
            "(A) Sequential Data Life Cycle",
            "(B) Software Development Life Cycle",
            "(C) Single Data Local Class",
            "(D) Serial Data Local Category"
        ],
        answer: "(B)",
        explanation: "Standard acronym."
    },
    {
        question: "What of the following is an operational component of the system?",
        options: [
            "(A) Input device",
            "(B) RAM",
            "(C) Processor",
            "(D) None of the above mentioned"
        ],
        answer: "(C)",
        explanation: "The Processor (CPU) is the active component that performs operations."
    },
    {
        question: "What is the major drawback of the Spiral Model?",
        options: [
            "(A) Higher amount of risk analysis",
            "(B) Doesn't work well for smaller projects",
            "(C) Additional functionalities are added later on",
            "(D) Strong approval and documentation control"
        ],
        answer: "(B)",
        explanation: "The Spiral model is expensive and complex, making it overkill for small, low-risk projects."
    },
    {
        question: "What does the study of an existing system refer to?",
        options: [
            "(A) Details of DFD",
            "(B) Feasibility Study",
            "(C) System Analysis",
            "(D) System Planning"
        ],
        answer: "(C)",
        explanation: "System Analysis involves studying the current system to understand requirements and improvements."
    },
    {
        question: "The Prototyping Model is most useful when:",
        options: [
            "(A) Requirements are well-defined and stable",
            "(B) Requirements are unclear or likely to change",
            "(C) The project has zero risk factors",
            "(D) A quick final product is required without user feedback"
        ],
        answer: "(B)",
        explanation: "Prototypes help users visualize and refine unclear requirements."
    },
    {
        question: "Software Debugging is known as",
        options: [
            "(A) Identifying the task to be computerized",
            "(B) Creating program code",
            "(C) Creating the algorithm",
            "(D) Finding and correcting errors in the program code"
        ],
        answer: "(D)",
        explanation: "Debugging is the process of locating and fixing bugs."
    },
    {
        question: "Which of the following statements best describes the relationship between coupling and cohesion?",
        options: [
            "(A) High coupling and high cohesion are both desirable attributes in software design.",
            "(B) High coupling and low cohesion are both desirable attributes in software design.",
            "(C) Low coupling and high cohesion are both desirable attributes in software design.",
            "(D) Low coupling and low cohesion are both desirable attributes in software design."
        ],
        answer: "(C)",
        explanation: "Good design aims for Low Coupling (independence) and High Cohesion (focused responsibility)."
    },
    {
        question: "Which of the following is not considered a good characteristic of a Software Requirement Specification (SRS)?",
        options: [
            "(A) Correctness",
            "(B) Ambiguity",
            "(C) Completeness",
            "(D) Consistency"
        ],
        answer: "(B)",
        explanation: "An SRS must be unambiguous so everyone interprets it the same way."
    },
    {
        question: "What type of cohesion occurs when elements of a module are grouped because they operate on the same data?",
        options: [
            "(A) Functional cohesion",
            "(B) Communicational cohesion",
            "(C) Temporal cohesion",
            "(D) Sequential cohesion"
        ],
        answer: "(B)",
        explanation: "Communicational cohesion is when elements operate on the same input/output data."
    },
    {
        question: "A module that performs a series of tasks that are related by time is said to have:",
        options: [
            "(A) Functional cohesion",
            "(B) Logical cohesion",
            "(C) Temporal cohesion",
            "(D) Coincidental cohesion"
        ],
        answer: "(C)",
        explanation: "Temporal cohesion groups tasks that must execute within the same time span (e.g., initialization)."
    },
    {
        question: "Information hiding is a key principle of which programming concept?",
        options: [
            "(A) Functional programming",
            "(B) Procedural programming",
            "(C) Object-oriented programming",
            "(D) Logic programming"
        ],
        answer: "(C)",
        explanation: "Information hiding (Encapsulation) is a core tenet of OOP."
    },
    {
        question: "Which is type of application software?",
        options: [
            "(A) MS Word",
            "(B) Linux",
            "(C) Windows",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "MS Word is an application; Linux and Windows are Operating Systems (System Software)."
    },
    {
        question: "Which is/are property of Object Oriented Programming?",
        options: [
            "(A) Class",
            "(B) Object",
            "(C) Inheritance",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "All are fundamental concepts of OOP."
    },
    {
        question: "Which of the following is the highest form of cohesion?",
        options: [
            "(A) Temporal cohesion",
            "(B) Procedural cohesion",
            "(C) Functional cohesion",
            "(D) Logical cohesion"
        ],
        answer: "(C)",
        explanation: "Functional cohesion (module performs exactly one task) is the best/highest level."
    },
    {
        question: "What does cohesion refer to in software engineering?",
        options: [
            "(A) The ability of a module to perform multiple unrelated tasks",
            "(B) The degree to which elements of a module belong together",
            "(C) The number of connections between modules",
            "(D) The extent of data hiding in a module"
        ],
        answer: "(B)",
        explanation: "Cohesion measures the intra-dependence within a module."
    },
    {
        question: "Which is the best type of coupling?",
        options: [
            "(A) Control coupling",
            "(B) Data coupling",
            "(C) Content coupling",
            "(D) Stamp coupling"
        ],
        answer: "(B)",
        explanation: "Data coupling is the loosest (best) form, involving simple data exchange."
    },
    {
        question: "Which of the following is/are the type of Coupling?",
        options: [
            "(A) Data",
            "(B) Common",
            "(C) Content",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "These are all standard types of coupling."
    },
    {
        question: "DFD stands as",
        options: [
            "(A) Data Flow Diagram",
            "(B) Data False Dimension",
            "(C) Dynamic Flow Data",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "Standard acronym."
    },
    {
        question: "Which of the following is a key advantage of the Spiral Model?",
        options: [
            "(A) Low cost for small projects",
            "(B) High risk due to lack of planning",
            "(C) Strong risk management",
            "(D) Strict sequential process"
        ],
        answer: "(C)",
        explanation: "The Spiral Model explicitly includes risk analysis in every iteration."
    },
    {
        question: "Which of the following is true about the Waterfall Model?",
        options: [
            "(A) It is best suited for projects with unclear requirements",
            "(B) It starts with testing phase",
            "(C) It follows a linear sequential approach",
            "(D) It allows testing to start before code"
        ],
        answer: "(C)",
        explanation: "Waterfall is a linear, sequential model."
    },
    {
        question: "Which of the following best describes the Waterfall Model?",
        options: [
            "(A) Non Sequential",
            "(B) Sequential and structured",
            "(C) Agile and adaptive",
            "(D) Rapid and incremental"
        ],
        answer: "(B)",
        explanation: "It is a classic sequential model."
    },
    {
        question: "Which of the following is not a characteristic of good software?",
        options: [
            "(A) Usability",
            "(B) Efficiency",
            "(C) Reliability",
            "(D) Expensiveness"
        ],
        answer: "(D)",
        explanation: "Software should be cost-effective, not expensive."
    },
    {
        question: "What does RAD stand for in software engineering?",
        options: [
            "(A) Rapid Application Development",
            "(B) Random Application Development",
            "(C) Removal Application Design",
            "(D) None of These"
        ],
        answer: "(A)",
        explanation: "Standard acronym."
    },
    {
        question: "Which is part of information gathering techniques?",
        options: [
            "(A) Interviews",
            "(B) Focus groups",
            "(C) Surveys",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "All are valid methods for gathering requirements."
    },
    {
        question: "Which is/are types of requirements?",
        options: [
            "(A) Functional Requirement",
            "(B) Non-Functional Requirement",
            "(C) Domain Requirement",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "These are standard categories of requirements."
    },
    {
        question: "Which of the following is a primary goal of software design?",
        options: [
            "(A) Reducing compilation time",
            "(B) Enhancing code readability and maintainability",
            "(C) Minimizing electricity usage",
            "(D) Reducing screen resolution"
        ],
        answer: "(B)",
        explanation: "Design aims to produce a high-quality structure that is maintainable."
    },
    {
        question: "Which is Type of Problem Partitioning?",
        options: [
            "(A) Horizontal",
            "(B) Vertical",
            "(C) Both (A) & (B)",
            "(D) None of these"
        ],
        answer: "(C)",
        explanation: "Problems can be partitioned horizontally (input/process/output) or vertically (functional branches)."
    },
    {
        question: "What does the term \"modularity\" in software design refer to?",
        options: [
            "(A) Running the software in different modules",
            "(B) Dividing software into small, independent parts",
            "(C) Adding more modules to increase size",
            "(D) Writing monolithic code blocks"
        ],
        answer: "(B)",
        explanation: "Modularity involves breaking the system into manageable components (modules)."
    },
    {
        question: "Which of the following is NOT a commonly used architectural style?",
        options: [
            "(A) Client-Server",
            "(B) Layered",
            "(C) Monolithic",
            "(D) Quadratic"
        ],
        answer: "(D)",
        explanation: "\"Quadratic\" is a mathematical term, not a software architecture style."
    },
    {
        question: "Which statement about validation and verification is correct?",
        options: [
            "(A) Validation can be fully automated, but verification cannot.",
            "(B) Verification ensures that requirements are met, while validation ensures correctness of the implementation.",
            "(C) Validation is performed only after the software is completely developed.",
            "(D) Verification is dynamic, whereas validation is static."
        ],
        answer: "(B)",
        explanation: "Verification: \"Are we building the product right?\" (Compliance with specs/requirements). Validation: \"Are we building the right product?\" (Correctness for the user). Option B is the accepted distinction in this context."
    },
    {
        question: "The step-by-step instructions that solve a problem are called",
        options: [
            "(A) An algorithm",
            "(B) A list",
            "(C) A plan",
            "(D) sequential structure"
        ],
        answer: "(A)",
        explanation: "Definition of an algorithm."
    },
    {
        question: "Which document would you choose to find the user system requirements?",
        options: [
            "(A) SDD",
            "(B) SRS",
            "(C) DDD",
            "(D) SRD"
        ],
        answer: "(B)",
        explanation: "Software Requirement Specification (SRS) captures user and system requirements."
    },
    {
        question: "Which are not characteristics of SRS document?",
        options: [
            "(A) Complete",
            "(B) Consistent",
            "(C) Coding",
            "(D) Ranked"
        ],
        answer: "(C)",
        explanation: "Coding is a process/phase, not a quality attribute of a specification document."
    },
    {
        question: "Which of the following is NOT a software development lifecycle model?",
        options: [
            "(A) Waterfall Model",
            "(B) Spiral Model",
            "(C) Datatype Model",
            "(D) Prototype Model"
        ],
        answer: "(C)",
        explanation: "Datatype is a programming concept, not an SDLC model."
    },
    {
        question: "What is a Functional Requirement?",
        options: [
            "(A) specifies the tasks the program must complete",
            "(B) specifies the tasks the program should not complete",
            "(C) specifies the tasks the program must not work",
            "(D) All of the mentioned"
        ],
        answer: "(A)",
        explanation: "Functional requirements define what the system should do (tasks/functions)."
    },
    {
        question: "In which phase of the SDLC is the feasibility study conducted?",
        options: [
            "(A) Planning",
            "(B) Design",
            "(C) Coding",
            "(D) Maintenance"
        ],
        answer: "(A)",
        explanation: "Feasibility is assessed in the initial Planning/Analysis phase."
    },
    {
        question: "What are main features of software engineering?",
        options: [
            "(A) Software must be costly",
            "(B) To develop software that is maintainable and reliable",
            "(C) To develop software in few seconds",
            "(D) To resolve error handling"
        ],
        answer: "(B)",
        explanation: "Maintainability and reliability are core quality goals of SE."
    },
    {
        question: "Software is defined as",
        options: [
            "(A) set of programs, documentation & configuration of data",
            "(B) set of testing the code",
            "(C) documentation and configuration of data",
            "(D) None of the mentioned"
        ],
        answer: "(A)",
        explanation: "Software includes instructions (programs), data structures (configuration), and documentation."
    },
    {
        question: "What is the main purpose of the 'Risk Analysis' phase in the Spiral Model?",
        options: [
            "(A) To identify and mitigate potential risks",
            "(B) To design the software architecture",
            "(C) To write and execute code",
            "(D) None of these"
        ],
        answer: "(A)",
        explanation: "The spiral model emphasizes repeated risk analysis to identify and resolve threats early."
    },
    {
        question: "The full form of UML is:",
        options: [
            "(A) Uniform Machine Language",
            "(B) Unity Machine Language",
            "(C) Unified Modelling Language",
            "(D) Universal Model Location"
        ],
        answer: "(C)",
        explanation: "Standard acronym."
    }
];
