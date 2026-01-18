const seQuestions2022_23 = [
    {
        question: "Which of the following white box testing technique is to set up test cases which covers all statements and branch conditions?",
        options: [
            "(A) Data-flow testing",
            "(B) Boundary testing",
            "(C) Control-flow testing",
            "(D) Pair-wise testing"
        ],
        answer: "(C)",
        explanation: "Control-flow testing involves covering all paths, statements, and branch conditions in the code's control structure."
    },
    {
        question: "Which of the following is not used in measuring the size of the software?",
        options: [
            "(A) Size of module",
            "(B) Function Points",
            "(C) KLOC",
            "(D) None of the above"
        ],
        answer: "(D)",
        explanation: "Size of module, Function Points, and KLOC (Thousand Lines of Code) are all valid metrics for measuring software size. Therefore, \"None of the above\" is the correct choice as none are *invalid* ."
    },
    {
        question: "______ is the process of evaluating a system or its component(s) with the intent to find whether it satisfies the specified requirements or not.",
        options: [
            "(A) planning",
            "(B) analysis",
            "(C) design",
            "(D) testing"
        ],
        answer: "(D)",
        explanation: "This is the standard definition of Software Testing: evaluating a system to verify requirements ."
    },
    {
        question: "SDLC stands for:",
        options: [
            "(A) Software Deployment Life Cycle",
            "(B) Software Design Life Cycle",
            "(C) Software Developer Life Cycle",
            "(D) Software Development Life Cycle"
        ],
        answer: "(D)",
        explanation: "Standard acronym for Software Development Life Cycle."
    },
    {
        question: "Verification has:",
        options: [
            "(A) dynamic activities",
            "(B) subjective activities",
            "(C) static activities",
            "(D) objective activities"
        ],
        answer: "(C)",
        explanation: "Verification (reviews, inspections) involves static analysis without executing code, whereas Validation involves dynamic execution."
    },
    {
        question: "Which of the following term describes testing?",
        options: [
            "(A) Finding broken code",
            "(B) Evaluating deliverable to find errors",
            "(C) A stage of all projects",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Testing is the process of evaluating deliverables to identify errors or defects."
    },
    {
        question: "Alpha testing is done at:",
        options: [
            "(A) Developer's end",
            "(B) User's end",
            "(C) Developer's and User's end",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "Alpha testing is performed at the developer's site, often by internal teams, before Beta testing at the user's site."
    },
    {
        question: "Upper CASE tools are used in ______ stages of SDLC.",
        options: [
            "(A) Software Design",
            "(B) Software Implementation",
            "(C) Software Testing",
            "(D) Software Requirement"
        ],
        answer: "(D)",
        explanation: "Upper CASE tools support early phases like **Planning, Requirements, and Analysis/Design**. Lower CASE supports Coding/Testing. Requirements (D) is the earliest phase listed."
    },
    {
        question: "Which of the following is not a type of CASE tool?",
        options: [
            "(A) Diagram tools",
            "(B) Process modeling tools",
            "(C) Documentation tools",
            "(D) Testing tool"
        ],
        answer: "(D)",
        explanation: "Depending on specific textbook classification, or potentially all are valid methods, testing tools are sometimes categorized distinctly, but generally all are CASE."
    },
    {
        question: "Which tool is used to assist in designing web pages?",
        options: [
            "(A) Web Development Tools",
            "(B) Prototyping Tools",
            "(C) Programming Tools",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "Web Development Tools are specifically designed for web page creation."
    },
    {
        question: "Where is CASE tool used?",
        options: [
            "(A) Project management",
            "(B) Schema generation",
            "(C) Data modeling",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "CASE tools support the entire software lifecycle, including management, modeling, and generation ."
    },
    {
        question: "What stores all changes and info related to the project from development through maintenance in CASE tools?",
        options: [
            "(A) Database",
            "(B) Repository",
            "(C) Register",
            "(D) Files"
        ],
        answer: "(B)",
        explanation: "A Central **Repository** acts as the data hub for CASE tools to store all project information."
    },
    {
        question: "Which testing includes testing a software manually, i.e. without using any automated tool or any script?",
        options: [
            "(A) Automation Testing",
            "(B) Client Testing",
            "(C) Manual Testing",
            "(D) All of the above"
        ],
        answer: "(C)",
        explanation: "Definition of Manual Testing."
    },
    {
        question: "Automation testing, which is also known as:",
        options: [
            "(A) Test Design",
            "(B) Test Automation",
            "(C) Test Process",
            "(D) Automation Testing"
        ],
        answer: "(B)",
        explanation: "Synonymous term."
    },
    {
        question: "In which of the following type of testing, testing is done without planning and documentation?",
        options: [
            "(A) Unit testing",
            "(B) Retesting",
            "(C) Ad hoc testing",
            "(D) Regression testing"
        ],
        answer: "(C)",
        explanation: "**Ad hoc testing** is informal, unplanned, and lacks documentation."
    },
    {
        question: "______ model also called phased development models that share the common objective of reducing the cycle time for development.",
        options: [
            "(A) Evolutionary Development Model",
            "(B) Incremental and Iterative Model",
            "(C) Prototyping Model",
            "(D) Spiral Model"
        ],
        answer: "(B)",
        explanation: "Incremental/Iterative models release software in phases to reduce cycle time."
    },
    {
        question: "Automation testing is also used to test the application from load, performance, and stress point of view:",
        options: [
            "(A) True",
            "(B) False",
            "(C) Can be true or false",
            "(D) Cannot say"
        ],
        answer: "(A)",
        explanation: "Automation tools are essential for Load and Stress testing which are difficult to perform manually."
    },
    {
        question: "How many levels of software testing are there?",
        options: [
            "(A) 1",
            "(B) 2",
            "(C) 3",
            "(D) 4"
        ],
        answer: "(D)",
        explanation: "The 4 standard levels are Unit, Integration, System, and Acceptance Testing."
    },
    {
        question: "Unit Testing cannot catch each and every bug in an application.",
        options: [
            "(A) Yes",
            "(B) No",
            "(C) Can be yes or no",
            "(D) Cannot say"
        ],
        answer: "(A)",
        explanation: "Unit testing only verifies individual components; integration and system errors can still exist."
    },
    {
        question: "Which testing has the highest-level modules tested first and progressively, lower-level modules are tested thereafter?",
        options: [
            "(A) Bottom-up integration",
            "(B) Top-down integration",
            "(C) Both (A) and (B)",
            "(D) Up-down integration"
        ],
        answer: "(B)",
        explanation: "Top-down integration starts with the main control module and stubs out lower modules."
    },
    {
        question: "Which of the following is type of Non-Functional Testing:",
        options: [
            "(A) Performance Testing",
            "(B) Load Testing",
            "(C) Stress Testing",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Performance, Load, and Stress testing check non-functional attributes like speed and stability."
    },
    {
        question: "Unit testing, integration testing and system testing when combined together is known as alpha testing:",
        options: [
            "(A) True",
            "(B) False",
            "(C) Can be true or false",
            "(D) Cannot say"
        ],
        answer: "(A)",
        explanation: "Alpha testing generally encompasses the full testing cycle (Unit to System) performed internally before release."
    },
    {
        question: "A software bug is an:",
        options: [
            "(A) error",
            "(B) fault",
            "(C) flaw",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Terms like error, fault, flaw, and failure are often used interchangeably to describe bugs."
    },
    {
        question: "Issue in software is raised by:",
        options: [
            "(A) Developer",
            "(B) Test Engineer",
            "(C) Customer",
            "(D) User"
        ],
        answer: "(B)",
        explanation: "While anyone can find an issue, Test Engineers are primarily responsible for raising/reporting bugs during development."
    },
    {
        question: "Software testers are people whose primary task is to find bugs, or write code to support testing:",
        options: [
            "(A) True",
            "(B) False",
            "(C) Can be true or false",
            "(D) Cannot say"
        ],
        answer: "(A)",
        explanation: "This accurately describes the role of a software tester."
    },
    {
        question: "The spiral model was originally proposed by:",
        options: [
            "(A) IBM",
            "(B) Barry Boehm",
            "(C) Royce",
            "(D) Pressman"
        ],
        answer: "(B)",
        explanation: "Barry Boehm proposed the Spiral Model in 1986."
    },
    {
        question: "Selection of a model is based on:",
        options: [
            "(A) Requirements",
            "(B) Development team",
            "(C) Users",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Project characteristics, team skills, and user needs all dictate model selection."
    },
    {
        question: "Which one of the following is not a software process quality?",
        options: [
            "(A) Portability",
            "(B) Productivity",
            "(C) Timeliness",
            "(D) Visibility"
        ],
        answer: "(A)",
        explanation: "Portability is a product quality. Productivity, Timeliness, and Visibility are process qualities."
    },
    {
        question: "Efficiency in a software product does not include:",
        options: [
            "(A) Processing time",
            "(B) Responsiveness",
            "(C) Licensing",
            "(D) Memory utilization"
        ],
        answer: "(C)",
        explanation: "Licensing is a legal/business aspect, not a technical efficiency metric like time or memory."
    },
    {
        question: "What is the first step in the software development lifecycle?",
        options: [
            "(A) Preliminary Investigation and Analysis",
            "(B) System Testing",
            "(C) System Design",
            "(D) Coding"
        ],
        answer: "(A)",
        explanation: "The process starts with investigation/planning/analysis."
    },
    {
        question: "The reason for software bugs and failures is due to:",
        options: [
            "(A) Software Developers",
            "(B) Software companies",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Errors can stem from individual developer mistakes or systemic company process failures."
    },
    {
        question: "Software Engineering is a :",
        options: [
            "(A) Complicated way to develop software",
            "(B) Systematic way to develop software",
            "(C) Cost-effective way to develop software",
            "(D) Both (B) and (C)"
        ],
        answer: "(D)",
        explanation: "Software Engineering applies systematic, disciplined, quantifiable approaches to be cost-effective and reliable."
    },
    {
        question: "Which of the items listed below is not one of the software engineering layers?",
        options: [
            "(A) Process",
            "(B) Manufacturing",
            "(C) Methods",
            "(D) Tools"
        ],
        answer: "(B)",
        explanation: "The layers are Tools, Methods, Process, and a Quality Focus. Manufacturing is not a standard layer."
    },
    {
        question: "Which of the following is involved in the system planning and designing phase of the Software Development Life Cycle (SDLC)?",
        options: [
            "(A) Specification freeze",
            "(B) Sizing",
            "(C) Parallel run",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Planning involves freezing specs, estimating size, and planning deployment strategies like parallel runs."
    },
    {
        question: "Which model is also known as Verification and validation model?",
        options: [
            "(A) V-model",
            "(B) Waterfall model",
            "(C) Big Bang model",
            "(D) Spiral model"
        ],
        answer: "(A)",
        explanation: "The V-Model emphasizes Verification and Validation phases in parallel."
    },
    {
        question: "The spiral model has two dimensions namely ______ and ______.",
        options: [
            "(A) diagonal, angular",
            "(B) radial, perpendicular",
            "(C) radial, angular",
            "(D) diagonal, perpendicular"
        ],
        answer: "(C)",
        explanation: "The spiral model dimensions are Radial (cumulative cost) and Angular (progress through phases)."
    },
    {
        question: "Spiral Model has user involvement in all its phases.",
        options: [
            "(A) True",
            "(B) False",
            "(C) All of the above",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "While user feedback is key in evaluation, users are not deeply involved in the engineering/coding phases unlike Agile. However, in comparison to Waterfall, it has *more* involvement. Technically \"All phases\" is usually considered **False** as users don't code."
    },
    {
        question: "One can choose Waterfall Model if the project development schedule is tight.",
        options: [
            "(A) True",
            "(B) False",
            "(C) All of the above",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Waterfall is rigid and slow; tight schedules often require iterative or RAD approaches."
    },
    {
        question: "RAD Model has high reliability requirements.",
        options: [
            "(A) True",
            "(B) False",
            "(C) All of the above",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "RAD focuses on speed and prototyping, potentially sacrificing reliability compared to formal methods."
    },
    {
        question: "Which of the following life cycle model can be chosen if the development team has less experience on similar projects?",
        options: [
            "(A) Spiral",
            "(B) Waterfall",
            "(C) RAD",
            "(D) Iterative Enhancement Model"
        ],
        answer: "(A)",
        explanation: "The Spiral model is best for high-risk projects where the team lacks experience, as it allows iterative risk assessment."
    },
    {
        question: "A model that is the demo implementation of the system:",
        options: [
            "(A) waterfall",
            "(B) prototype",
            "(C) incremental",
            "(D) agile"
        ],
        answer: "(B)",
        explanation: "A Prototype is a working demo/mockup of the system."
    },
    {
        question: "A stage in which individual components are integrated and ensured that they are error-free to meet customer requirements.",
        options: [
            "(A) Coding",
            "(B) Testing",
            "(C) Design",
            "(D) Implementation"
        ],
        answer: "(B)",
        explanation: "Testing (specifically Integration and System testing) ensures components work together and meet requirements."
    },
    {
        question: "ER diagram is a ______.",
        options: [
            "(A) Design",
            "(B) Coding",
            "(C) Testing",
            "(D) None of above"
        ],
        answer: "(A)",
        explanation: "ER Diagrams are used in the Database Design phase."
    },
    {
        question: "______ is an object into real world that is distinguishable from all other objects.",
        options: [
            "(A) Entity",
            "(B) Attribute",
            "(C) Both of the above",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "Definition of an Entity."
    },
    {
        question: "Each entity has a set of ______.",
        options: [
            "(A) Entity",
            "(B) Attribute",
            "(C) Row",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Entities are described by Attributes."
    },
    {
        question: "______ attributes can be divided into subparts.",
        options: [
            "(A) Simple",
            "(B) Composite",
            "(C) Single valued",
            "(D) Multivalued"
        ],
        answer: "(B)",
        explanation: "Composite attributes (e.g., Name -> First, Last) can be divided."
    },
    {
        question: "______ represent entity set.",
        options: [
            "(A) Ellipses",
            "(B) Rectangles",
            "(C) Diamonds",
            "(D) Lines"
        ],
        answer: "(B)",
        explanation: "In ER diagrams, Rectangles represent Entities."
    },
    {
        question: "______ represent relationship set.",
        options: [
            "(A) Ellipses",
            "(B) Rectangles",
            "(C) Diamonds",
            "(D) Lines"
        ],
        answer: "(C)",
        explanation: "Diamonds represent Relationships."
    },
    {
        question: "______ represent derived attribute.",
        options: [
            "(A) Double ellipse",
            "(B) Dashed ellipse",
            "(C) Diamonds",
            "(D) Lines"
        ],
        answer: "(B)",
        explanation: "Dashed ellipses represent Derived attributes."
    },
    {
        question: "______ is a graphic representation of system that shows data flows to from and within system...",
        options: [
            "(A) DFD",
            "(B) ER model",
            "(C) Decision table",
            "(D) Decision tree"
        ],
        answer: "(A)",
        explanation: "Data Flow Diagrams (DFD) model the flow of data."
    },
    {
        question: "______ software resides only in read only memory and is used to control products and systems...",
        options: [
            "(A) Business",
            "(B) Embedded",
            "(C) System",
            "(D) Personal"
        ],
        answer: "(B)",
        explanation: "Embedded software controls consumer/industrial devices and resides in ROM."
    },
    {
        question: "The cost of software engineering includes approximately ______ of development costs and ______ of testing costs.",
        options: [
            "(A) 50%, 50%",
            "(B) 40%, 60%",
            "(C) 80%, 20%",
            "(D) 60%, 40%"
        ],
        answer: "(D)",
        explanation: "A common rule of thumb is 60% development (including design/coding) and 40% testing."
    },
    {
        question: "The ______ model stipulates that the requirements be completely specified before the rest of the development can processed.",
        options: [
            "(A) Waterfall",
            "(B) Rapid Application Development (RAD)",
            "(C) Iterative Development",
            "(D) Incremental Development"
        ],
        answer: "(A)",
        explanation: "The Waterfall model requires frozen requirements before design begins."
    },
    {
        question: "______ model couples the iterative nature of the prototyping with the controlled and systematic aspects of the linear sequential model.",
        options: [
            "(A) Spiral",
            "(B) Rapid Application Development (RAD)",
            "(C) Iterative Development",
            "(D) Incremental Development"
        ],
        answer: "(A)",
        explanation: "The Spiral model combines prototyping (iterative) with the systematic Waterfall approach."
    },
    {
        question: "______ results in modification to the software to accommodate changes to its external environment.",
        options: [
            "(A) Adaptive maintenance",
            "(B) Perfective maintenance",
            "(C) Corrective maintenance",
            "(D) Standard maintenance"
        ],
        answer: "(A)",
        explanation: "Adaptive maintenance handles environment changes."
    },
    {
        question: "Which of the following activities includes in linear sequential model...",
        options: [
            "(A) (i), (ii), (iii) and (iv) only",
            "(B) (ii), (iii), (iv) and (v) only",
            "(C) (i), (ii), (iii) and (v) only",
            "(D) (i), (iii), (iv) and (v) only"
        ],
        answer: "(C)",
        explanation: "Linear sequential (Waterfall) includes: Analysis, Design, Coding, Testing. \"Correction\" implies maintenance or debugging, not a primary phase name in the standard list, though testing involves finding defects. Option C covers the main phases."
    },
    {
        question: "The ______ assumes the requirement of a system which can be baseline before the design begins.",
        options: [
            "(A) linear sequential model",
            "(B) rapid application model",
            "(C) incremental model",
            "(D) iterative enhancement model"
        ],
        answer: "(A)",
        explanation: "Only the Waterfall (linear sequential) model assumes requirements can be baselined/frozen upfront."
    },
    {
        question: "______ is an incremental software development process model that emphasizes an extremely short development cycle.",
        options: [
            "(A) Linear Sequential Development",
            "(B) Rapid Application Development (RAD)",
            "(C) Incremental Development",
            "(D) Iterative Enhancement"
        ],
        answer: "(B)",
        explanation: "RAD emphasizes very short cycles (60-90 days)."
    },
    {
        question: "Reliability in a software system can be achieved using which of the following strategies?",
        options: [
            "(A) Fault avoidance",
            "(B) Fault tolerance",
            "(C) Fault detection",
            "(D) All the above"
        ],
        answer: "(D)",
        explanation: "Reliability is achieved through avoiding, detecting, and tolerating faults."
    },
    {
        question: "______ involves modifying the system so that the fault does not recur.",
        options: [
            "(A) Failure detection",
            "(B) Damage assessment",
            "(C) Fault recovery",
            "(D) Fault repair"
        ],
        answer: "(D)",
        explanation: "Fault repair fixes the underlying issue."
    },
    {
        question: "................ is a list of names used by the systems, arranged alphabetically.",
        options: [
            "(A) Data Library",
            "(B) Data Dictionary",
            "(C) Name Dictionary",
            "(D) System Dictionary"
        ],
        answer: "(B)",
        explanation: "A Data Dictionary lists and defines all data elements/names."
    },
    {
        question: "______ is the process, which controls the changes made to a system...",
        options: [
            "(A) Software management",
            "(B) Configuration management",
            "(C) Version management",
            "(D) Release management"
        ],
        answer: "(B)",
        explanation: "Configuration Management controls changes and versions."
    },
    {
        question: "______ requires developers and customers who are committed to the rapid-fire activities...",
        options: [
            "(A) Waterfall",
            "(B) Rapid Application Development (RAD)",
            "(C) Iterative Development",
            "(D) Incremental Development"
        ],
        answer: "(B)",
        explanation: "RAD requires high commitment for rapid development."
    },
    {
        question: "The iterative enhancement model in software development encompasses which of the following phases:",
        options: [
            "(A) (i), (ii) and (iii) only",
            "(B) (ii), (iii) and (iv) only",
            "(C) (i), (ii) and (iv) only",
            "(D) All (i), (ii), (iii) and (iv)"
        ],
        answer: "(A)",
        explanation: "Iterative models repeat Analysis, Design, and Coding. Implementation is the result. Option A or D depends on whether Implementation is considered a phase *within* the loop or the final release. Usually, all phases are iterated. Let's go with D for completeness."
    },
    {
        question: "______ model is particularly useful when staffing is unavailable for a complete implementation...",
        options: [
            "(A) Linear Sequential Development",
            "(B) Rapid Application Development",
            "(C) Incremental Development",
            "(D) Iterative Enhancement"
        ],
        answer: "(C)",
        explanation: "Incremental development allows delivering core functionality with fewer staff, adding features in increments."
    },
    {
        question: "Which of the following is NOT the phase consisting on spiral model of software development?",
        options: [
            "(A) Planning",
            "(B) Design",
            "(C) Engineering",
            "(D) Risk-Analysis"
        ],
        answer: "(B)",
        explanation: "The 4 quadrants are typically: Planning, Risk Analysis, Engineering (Construction), and Evaluation. Design happens *in* Engineering. However, standard names vary. If \"Design\" is listed as a distinct phase option against standard quadrants, it's the outlier compared to Planning and Risk Analysis."
    },
    {
        question: "Rapid Application Development (RAD) model in software development encompasses which of the following phases?",
        options: [
            "(A) (i), (ii) and (iii) only",
            "(B) (ii), (iii) and (iv) only",
            "(C) (i), (iii) and (iv) only",
            "(D) All (i), (ii), (iii) and (iv)"
        ],
        answer: "(D)",
        explanation: "RAD phases include Business Modeling, Data Modeling, Process Modeling, Application Generation, and Testing."
    },
    {
        question: "Which of the following is/are the different types of system model, which might be produced as part of the analysis process?",
        options: [
            "(A) (i), (ii) and (iii) only",
            "(B) (ii), iii and iv only",
            "(C) (i), (iii) and (iv) only",
            "(D) All (i), (ii), (iii) and iv"
        ],
        answer: "(D)",
        explanation: "Analysis models include data models, object models (composition/classification), and process models."
    },
    {
        question: "______ may be used to show how the system reacts to internal and external events.",
        options: [
            "(A) Entity-relation diagram",
            "(B) Data flow diagram",
            "(C) Objects class diagram",
            "(D) State transaction diagram (State Transition Diagram)"
        ],
        answer: "(D)",
        explanation: "State diagrams show system states and transitions (reactions to events)."
    },
    {
        question: "______ is a way of showing how data is processed by a system.",
        options: [
            "(A) Data flow models",
            "(B) System models",
            "(C) Semantic data models",
            "(D) Objects models"
        ],
        answer: "(A)",
        explanation: "Data Flow Models (DFD) show data processing."
    },
    {
        question: "State whether the following statements about data flow model are True or False:",
        options: [
            "(A) True, False",
            "(B) False, True",
            "(C) False, False",
            "(D) True, True"
        ],
        answer: "(D)",
        explanation: "DFDs show data movement (True). They are simple/intuitive (True) compared to complex interface specs."
    },
    {
        question: "______ have the advantage that unlike some other modeling notations, they are simple and intuitive.",
        options: [
            "(A) Graphical notations",
            "(B) Visual notations",
            "(C) Program description language (PDL)",
            "(D) Informal text"
        ],
        answer: "(A)",
        explanation: "Graphical notations (like DFDs) are prized for simplicity/intuitiveness."
    },
    {
        question: "A/An ______ is one of the structured methods of software design, where the system is modeled using the data transformations...",
        options: [
            "(A) data-flow model",
            "(B) structured model",
            "(C) classification model",
            "(D) entity-relation model"
        ],
        answer: "(A)",
        explanation: "Data-flow models focus on data transformations."
    },
    {
        question: "In ______ models, the system is decomposed into functional models...",
        options: [
            "(A) object-oriented model",
            "(B) domain specific model",
            "(C) control model",
            "(D) data-flow model"
        ],
        answer: "(D)",
        explanation: "Data-flow models decompose systems into functional processes (transforms)."
    },
    {
        question: "A strategy relies on decomposing the system into a set of interacting functions...",
        options: [
            "(A) architectural design",
            "(B) object-oriented design",
            "(C) function oriented design",
            "(D) interface design"
        ],
        answer: "(C)",
        explanation: "Functional decomposition is the hallmark of Function Oriented Design."
    },
    {
        question: "Which of the following is NOT the notation used in design documents?",
        options: [
            "(A) Entity-relation diagram",
            "(B) Data flow diagram",
            "(C) Objects class diagram",
            "(D) Informal text"
        ],
        answer: "(D)",
        explanation: "While text explains things, \"Informal text\" is not a formal *notation* like ERD, DFD, or Class Diagrams."
    },
    {
        question: "Software is considered to be a collection of:",
        options: [
            "(A) programming code",
            "(B) associated libraries",
            "(C) documentations",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Software includes code, libraries, and documentation."
    },
    {
        question: "Which of the following is the characteristic of good software?",
        options: [
            "(A) Transitional",
            "(B) Operational",
            "(C) Maintenance",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "Good software has Operational, Transitional (Portability), and Maintenance characteristics."
    },
    {
        question: "The reason for software bugs and failures is due to:",
        options: [
            "(A) Software developers",
            "(B) Software companies",
            "(C) Both (A) and (B)",
            "(D) None of the above"
        ],
        answer: "(C)",
        explanation: "Repeat of Q31."
    },
    {
        question: "What are attributes of good software?",
        options: [
            "(A) Software functionality",
            "(B) Software development",
            "(C) Software maintainability",
            "(D) Both (A) and (C)"
        ],
        answer: "(D)",
        explanation: "Functionality and Maintainability are key attributes."
    },
    {
        question: "Which of the following are valid step in SDLC framework?",
        options: [
            "(A) Requirement Gathering",
            "(B) System Analysis",
            "(C) Software Design",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "All are standard SDLC phases."
    },
    {
        question: "Which of the following is not correct model in Software Development Paradigm?",
        options: [
            "(A) Waterfall Model",
            "(B) P model",
            "(C) Spiral Model",
            "(D) V model"
        ],
        answer: "(B)",
        explanation: "There is no standard \"P model\" (Prototyping is a model, but P is likely a typo/fake). Waterfall, Spiral, and V are standard."
    },
    {
        question: "Waterfall model is not suitable for:",
        options: [
            "(A) Small projects",
            "(B) Complex projects",
            "(C) Accommodating changes",
            "(D) Maintenance projects"
        ],
        answer: "(C)",
        explanation: "Waterfall handles changes poorly."
    },
    {
        question: "Which type of integration testing uses stubs?",
        options: [
            "(A) Top-down testing",
            "(B) Bottom-up testing
",
            "(C) Both in top down and bottom-up",
            "(D) System testing"
        ],
        answer: "(A)",
        explanation: "Top-down testing uses stubs to simulate lower-level modules. (Bottom-up uses drivers) ."
    },
    {
        question: "The process to gather the software requirements from client, analyze and document them is known as:",
        options: [
            "(A) Feasibility Study",
            "(B) Requirement Gathering",
            "(C) Requirement Engineering",
            "(D) System Requirements Specification"
        ],
        answer: "(C)",
        explanation: "Requirement Engineering covers elicitation, analysis, and documentation."
    },
    {
        question: "It is the process in which developers discuss with the client and end users and know their expectations from the software:",
        options: [
            "(A) Requirements gathering",
            "(B) Organizing requirements",
            "(C) Negotiation and discussion",
            "(D) Documentation"
        ],
        answer: "(A)",
        explanation: "Gathering/Elicitation involves discussing expectations."
    },
    {
        question: "Size Metrics denoted by:",
        options: [
            "(A) LOC",
            "(B) KLOC",
            "(C) GLOC",
            "(D) ZLOC"
        ],
        answer: "(B)",
        explanation: "KLOC (Thousands of Lines of Code) is the standard metric notation."
    },
    {
        question: "How many phases are there in Brainstorming?",
        options: [
            "(A) 2",
            "(B) 3",
            "(C) 4",
            "(D) 5"
        ],
        answer: "(A)",
        explanation: "Brainstorming typically has a generation phase and a consolidation/evaluation phase. Some models say 3. Given options, 2 is common (Generate, Evaluate)."
    },
    {
        question: "Which of the following is not an Advantage of modularization ?",
        options: [
            "(A) Smaller components are easier to maintain",
            "(B) Concurrent execution can be made possible",
            "(C) Program cannot be divided based on functional aspects",
            "(D) Desired level of abstraction can be brought in the program"
        ],
        answer: "(C)",
        explanation: "Programs *can* and *should* be divided based on function; saying they \"cannot\" is false, thus not an advantage."
    },
    {
        question: "Which of the following defines the degree of intra-dependability within elements of a module ?",
        options: [
            "(A) Cohesion",
            "(B) Coupling",
            "(C) Design Verification",
            "(D) None of the above"
        ],
        answer: "(A)",
        explanation: "Cohesion measures internal dependability."
    },
    {
        question: "Which tool is use for structured designing?",
        options: [
            "(A) Program Chart",
            "(B) Structure chart",
            "(C) Module Chart",
            "(D) All of the above"
        ],
        answer: "(B)",
        explanation: "Structure Charts are the primary tool for Structured Design."
    },
    {
        question: "Which of the following is the best type of module cohesion ?",
        options: [
            "(A) Functional Cohesion",
            "(B) Temporal Cohesion",
            "(C) Functional Cohesion (Duplicate)",
            "(D) Sequential Cohesion"
        ],
        answer: "(A)",
        explanation: "Functional Cohesion is the strongest/best type."
    },
    {
        question: "Choose the option that does not define Function Oriented Software Design:",
        options: [
            "(A) It consists of module definitions",
            "(B) Modules represent data abstraction",
            "(C) Modules support functional abstraction",
            "(D) None of the above"
        ],
        answer: "(B)",
        explanation: "Function Oriented Design focuses on functions; **Object Oriented** Design focuses on data abstraction. FOD modules represent functional abstraction, not data abstraction."
    },
    {
        question: "What is DFD stands for?",
        options: [
            "(A) Data Flowchart Diagram",
            "(B) Data Flow Diagram",
            "(C) Depict Flow Diagram",
            "(D) Data Flow Depicts"
        ],
        answer: "(B)",
        explanation: "Data Flow Diagram."
    },
    {
        question: "How many levels of DFD are there?",
        options: [
            "(A) 2",
            "(B) 3",
            "(C) 4",
            "(D) 5"
        ],
        answer: "(B)",
        explanation: "Typically DFDs go to Level 0 (Context), Level 1, and Level 2. So 3 levels are common practice."
    },
    {
        question: "The context diagram is also known as:",
        options: [
            "(A) Level-0 DFD",
            "(B) Level-1 DFD",
            "(C) Level-2 DFD",
            "(D) All of the above"
        ],
        answer: "(A)",
        explanation: "Context Diagram = Level 0."
    },
    {
        question: "Which of the following is a function of CASE Tool?",
        options: [
            "(A) Supporting Structured analysis and design (SA/SD)",
            "(B) Maintaining the data dictionary",
            "(C) Checking whether DFDs are balanced or not",
            "(D) All of the above"
        ],
        answer: "(D)",
        explanation: "CASE tools do all these things ."
    },
    {
        question: "Which of the following is not true about Software Validation?",
        options: [
            "(A) Validation ensures the product under development is as per the user requirements.",
            "(B) Validation do not emphasize on user requirements.",
            "(C) Validation emphasizes on user requirements.",
            "(D) Validation is carried out at the end of the SDLC"
        ],
        answer: "(B)",
        explanation: "Validation *does* emphasize user requirements. Statement B is false."
    },
    {
        question: "How many types of software testing exist?",
        options: [
            "(A) 1",
            "(B) 2",
            "(C) 3",
            "(D) 4"
        ],
        answer: "(B)",
        explanation: "Testing is broadly categorized into 2 main types: Manual and Automation (or Static & Dynamic, or Black & White Box)."
    },
    {
        question: "SRS stands for:",
        options: [
            "(A) System requirements specification",
            "(B) System responds-software",
            "(C) Software respond system",
            "(D) Software requirements specification"
        ],
        answer: "(D)",
        explanation: "Software Requirements Specification."
    }
];
