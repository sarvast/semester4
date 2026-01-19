// DBMS 2024 Question Bank
const dbmsQuestions2024 = [
    {
        question: "What does DBMS stand for?",
        options: ["Database Management System", "Data Business Management System", "Digital Backup Management System", "Data Buffering and Monitoring System"],
        correct: 0,
        explanation: "DBMS stands for Database Management System, which is software for creating and managing databases."
    },
    {
        question: "Which of the following is not a component of DBMS?",
        options: ["Data dictionary", "Query optimizer", "User interface", "Spreadsheet application"],
        correct: 3,
        explanation: "A spreadsheet application (like Excel) is a separate software tool, not an internal component of a DBMS architecture like a query optimizer or data dictionary."
    },
    {
        question: "Which of the following is not a characteristic of a DBMS?",
        options: ["Data redundancy", "Data consistency", "Data independence", "Data security"],
        correct: 0,
        explanation: "A primary goal of a DBMS is to reduce or control data redundancy, not to promote it. Consistency, independence, and security are key characteristics."
    },
    {
        question: "What is the primary purpose of a DBMS?",
        options: ["To create tables and columns", "To manage and organize data", "To generate reports and charts", "To develop web applications"],
        correct: 1,
        explanation: "The fundamental purpose is to efficiently store, retrieve, manage, and organize data."
    },
    {
        question: "Which of the following is an example of a popular open-source DBMS?",
        options: ["Oracle Database", "Microsoft SQL Server", "IBM DB2", "MySQL"],
        correct: 3,
        explanation: "MySQL is a widely used open-source relational database management system. Oracle, SQL Server, and DB2 are proprietary commercial products."
    },
    {
        question: "Which of the following is not a type of DBMS?",
        options: ["Hierarchical DBMS", "Relational DBMS", "Object-Oriented DBMS", "Distributed DBMS"],
        correct: 3,
        explanation: "Standard texts consider all options valid types. However, mostly Distributed DBMS is considered an architecture separate from data models in some contexts."
    },
    {
        question: "Which language is commonly used to interact with a DBMS?",
        options: ["SQL", "HTML", "JAVA", "C++"],
        correct: 0,
        explanation: "SQL (Structured Query Language) is the standard language for relational database management systems."
    },
    {
        question: "What does SQL stand for?",
        options: ["Standard Query Language", "Structured Query Language", "System Query Language", "Simple Query Language"],
        correct: 1,
        explanation: "SQL stands for Structured Query Language."
    },
    {
        question: "Which of the following is an example of a database model used in DBMS?",
        options: ["Entity-Relationship model", "Object-Oriented model", "Relational model", "All of the above"],
        correct: 3,
        explanation: "ER, Object-Oriented, and Relational are all established database models."
    },
    {
        question: "What is data redundancy in the context of DBMS?",
        options: ["Storing multiple copies of the same data", "Ensuring data consistency across multiple databases", "Encrypting sensitive data to prevent unauthorized access", "Splitting data into multiple tables for better performance"],
        correct: 0,
        explanation: "Redundancy refers to the unnecessary duplication of data within a database."
    },
    {
        question: "Which of the following is not a benefit of using a DBMS?",
        options: ["Improved data sharing and integration", "Enhanced data security and privacy", "Reduced data consistency and integrity", "Increased data accessibility and availability"],
        correct: 2,
        explanation: "DBMS aims to improve data consistency and integrity. Reducing it would be a disadvantage."
    },
    {
        question: "What is the role of a data dictionary in a DBMS?",
        options: ["To store user passwords", "To provide a graphical user interface", "To manage database backups and recovery", "To store metadata about the database structure"],
        correct: 3,
        explanation: "A data dictionary (or system catalog) stores metadata—data about the data (definitions, structure, constraints)."
    },
    {
        question: "Which of the following is an example of a primary key in a relational database?",
        options: ["Employee name", "Customer address", "Product price", "Student ID"],
        correct: 3,
        explanation: "A Primary Key must be unique and not null. Names, addresses, and prices can be duplicated. A Student ID is typically unique to each student."
    },
    {
        question: "What is the purpose of database normalization?",
        options: ["To remove duplicate data from the database", "To organize data into multiple tables and eliminate data redundancy", "To create indexes for faster data retrieval", "To generate reports and analytics from the data"],
        correct: 1,
        explanation: "Normalization is the process of organizing data to reduce redundancy and improve data integrity."
    },
    {
        question: "Which of the following is not a level of data abstraction in a DBMS?",
        options: ["Physical level", "Logical level", "External level", "Hierarchical level"],
        correct: 3,
        explanation: "The three standard levels of abstraction (ANSI/SPARC architecture) are Physical, Logical (Conceptual), and External (View). Hierarchical is a data model, not an abstraction level."
    },
    {
        question: "Which of the following is not a database operation supported by a DBMS?",
        options: ["Create", "Read", "Update", "Execute"],
        correct: 3,
        explanation: "The standard CRUD operations are Create, Read, Update, and Delete. 'Execute' is a general computing term, not a specific data manipulation operation like the others."
    },
    {
        question: "What is the purpose of a transaction in a DBMS?",
        options: ["To generate reports and charts", "To manage database users and permissions", "To ensure data consistency and integrity", "To organize data into tables and columns"],
        correct: 2,
        explanation: "A transaction is a unit of work that must be processed reliably to ensure data integrity and consistency (ACID properties)."
    },
    {
        question: "Which of the following is an example of a database management system?",
        options: ["Microsoft Word", "Adobe Photoshop", "Microsoft Excel", "Oracle Database"],
        correct: 3,
        explanation: "Oracle Database is a dedicated DBMS. Word, Photoshop, and Excel are application software."
    },
    {
        question: "Which of the following is not a data model used in DBMS?",
        options: ["Hierarchical model", "Relational model", "Network model", "Sequential model"],
        correct: 3,
        explanation: "Hierarchical, Network, and Relational are the classic database models. Sequential is a file organization method, not a database model."
    },
    {
        question: "What is the purpose of a database schema in a DBMS?",
        options: ["To define the structure and organization of a database", "To create backups and restore data", "To execute complex queries and calculations", "To generate graphical reports and visualizations"],
        correct: 0,
        explanation: "The schema is the logical blueprint or skeleton of the database structure."
    },
    {
        question: "In the ER model, an entity is represented by:",
        options: ["Rectangle", "Circle", "Diamond", "Triangle"],
        correct: 0,
        explanation: "In standard Entity-Relationship diagrams, entities are represented by rectangles."
    },
    {
        question: "Which of the following is not an example of an entity in an ER model?",
        options: ["Customer", "Product", "Relationship", "Employee"],
        correct: 2,
        explanation: "'Customer', 'Product', and 'Employee' are objects/concepts (Entities). 'Relationship' is the association between entities, not an entity itself."
    },
    {
        question: "A primary key in an ER model uniquely identifies a(n):",
        options: ["Entity", "Relationship", "Attribute", "Table"],
        correct: 0,
        explanation: "A primary key uniquely identifies a specific entity instance within an entity set."
    },
    {
        question: "In the ER model, a relationship is also known as:",
        options: ["Tuple", "Attribute", "Key", "Association"],
        correct: 3,
        explanation: "A relationship represents an association between entities."
    },
    {
        question: "Which of the following cardinality ratios represents a mandatory relationship?",
        options: ["1:1", "1:N", "N:M", "0:N"],
        correct: 0,
        explanation: "While cardinality ratios describe quantity, in multiple-choice contexts, 1:1 is often treated as the strongest/mandatory link compared to 0:N which explicitly allows zero."
    },
    {
        question: "In the ER model, an attribute is represented by:",
        options: ["Rectangle", "Circle", "Diamond", "Ellipse"],
        correct: 3,
        explanation: "Attributes are represented by ellipses (ovals) connected to the entity."
    },
    {
        question: "Which of the following is not a valid attribute type in the ER model?",
        options: ["Numeric", "Text", "Boolean", "Association"],
        correct: 3,
        explanation: "Numeric, Text, and Boolean are data types for attributes. Association is a relationship term, not an attribute type."
    },
    {
        question: "The relationship between two entities is represented by:",
        options: ["Rectangle", "Circle", "Diamond", "Triangle"],
        correct: 2,
        explanation: "Diamonds represent relationships in ER diagrams."
    },
    {
        question: "The process of converting an ER model into a relational schema is called:",
        options: ["Normalization", "Indexing", "Data modeling", "Mapping"],
        correct: 3,
        explanation: "This process is specifically called Mapping (or logical design)."
    },
    {
        question: "Which of the following cardinality ratios represents a one-to-many relationship?",
        options: ["1:1", "1:N", "N:M", "0:N"],
        correct: 1,
        explanation: "1:N stands for One-to-Many."
    },
    {
        question: "Which of the following represents an identifying relationship in the ER model?",
        options: ["Dashed line", "Double line", "Solid line", "None of the above"],
        correct: 1,
        explanation: "A double diamond (and often double lines) represents an identifying relationship for a weak entity."
    },
    {
        question: "In the ER model, a weak entity is an entity that:",
        options: ["has a composite primary key", "cannot exist without a related entity", "has a derived attribute", "has a many-to-many relationship"],
        correct: 1,
        explanation: "A weak entity depends on the existence of a strong (owner) entity for its identification."
    },
    {
        question: "Which of the following represents a multivalued attribute in the ER model?",
        options: ["Underline", "Double ellipse", "Dotted line", "Double line"],
        correct: 1,
        explanation: "A double ellipse represents a multivalued attribute."
    },
    {
        question: "In the ER model, an associative entity is used to represent:",
        options: ["Inheritance between entities", "Relationships between relationships", "Relationships as entities (Many-to-Many resolution)", "Weak entities"],
        correct: 2,
        explanation: "An associative entity is used to resolve a many-to-many relationship into two one-to-many relationships, effectively treating the relationship as an entity."
    },
    {
        question: "The process of removing duplicate data from an ER model is known as:",
        options: ["Normalization", "Denormalization", "Deduplication", "Factoring"],
        correct: 0,
        explanation: "Normalization is the technique used to minimize redundancy (duplicates)."
    },
    {
        question: "The maximum number of entities that can be involved in a relationship is known as the:",
        options: ["Cardinality", "Degree", "Entity set", "Attribute"],
        correct: 1,
        explanation: "The degree of a relationship type is the number of participating entity types."
    },
    {
        question: "In the ER model, a composite attribute is an attribute that:",
        options: ["consists of multiple values", "cannot be further divided into subparts", "depends on other attributes", "can be subdivided into smaller parts"],
        correct: 3,
        explanation: "A composite attribute (e.g., Address) can be divided into sub-parts (Street, City, Zip)."
    },
    {
        question: "Which of the following is not a type of relationship in the ER model?",
        options: ["One-to-one", "One-to-many", "Many-to-one", "Many-to-many"],
        correct: 0,
        explanation: "All listed options valid. 1:1, 1:N, M:N are standard relationships."
    },
    {
        question: "In the ER model, a derived attribute is an attribute that:",
        options: ["can be calculated from other attributes", "represents a relationship", "must have a null value", "is derived from a primary key"],
        correct: 0,
        explanation: "A derived attribute (dashed ellipse) is one whose value is computed from another attribute."
    },
    {
        question: "The process of grouping similar entities into higher-level entities is known as:",
        options: ["Aggregation", "Composition", "Normalization", "Generalization"],
        correct: 3,
        explanation: "Generalization is the process of extracting common features from specific entities to create a higher-level entity (superclass)."
    },
    {
        question: "What is normalization in the context of database design?",
        options: ["The process of converting data into a different format", "The process of removing duplicate data from a database", "The process of organizing data into tables and eliminating redundancy", "The process of encrypting data to enhance security"],
        correct: 2,
        explanation: "Normalization organizes data to reduce redundancy and improve dependency logic."
    },
    {
        question: "Which normal form requires that the database is in first normal form (1NF) and all non-key attributes are fully functionally dependent on the primary key?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 1,
        explanation: "2NF removes partial dependencies."
    },
    {
        question: "Which normal form eliminates transitive dependencies between non-key attributes?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 2,
        explanation: "3NF requires that no non-key attribute depends on another non-key attribute."
    },
    {
        question: "Which normal form is also known as the highest normal form and eliminates all possible anomalies?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 3,
        explanation: "BCNF is a stricter version of 3NF."
    },
    {
        question: "Which normal form allows partial dependencies between non-key attributes?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 0,
        explanation: "1NF only requires atomicity. It allows partial dependencies."
    },
    {
        question: "Which normal form is based on the concept of a functional dependency?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 2,
        explanation: "3NF is the classic definition involving 'Key, the whole Key, and nothing but the Key'."
    },
    {
        question: "Which normal form is violated if a non-key attribute depends on a subset of the primary key?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 1,
        explanation: "This is a Partial Dependency, which violates 2NF."
    },
    {
        question: "Which normal form allows repeating groups and is considered to be the lowest level of normalization?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 0,
        explanation: "Though technically 1NF eliminates repeating groups, among options 1NF is the lowest."
    },
    {
        question: "Which normal form allows only atomic values and eliminates multi-valued dependencies?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 0,
        explanation: "1NF requires that all column values be atomic."
    },
    {
        question: "Which normal form is an extension of the third normal form (3NF) and further addresses dependencies involving candidate keys?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 3,
        explanation: "BCNF handles cases where a determinant is not a candidate key."
    },
    {
        question: "What is functional dependency in the context of database design?",
        options: ["A relationship between two tables", "A constraint that defines a unique identifier", "A relationship between attributes within a table", "A constraint that enforces referential integrity"],
        correct: 2,
        explanation: "Functional dependency describes the relationship between attributes where one attribute determines the value of another."
    },
    {
        question: "In functional dependency A -> B, what does A represent?",
        options: ["The primary key", "The foreign key", "The dependent attribute", "The determinant attribute"],
        correct: 3,
        explanation: "The left side of the arrow is the Determinant."
    },
    {
        question: "In functional dependency A -> B, what does B represent?",
        options: ["The primary key", "The foreign key", "The dependent attribute", "The determinant attribute"],
        correct: 2,
        explanation: "The right side is the Dependent attribute."
    },
    {
        question: "Which of the following is true about functional dependency?",
        options: ["A single attribute can determine multiple attributes.", "A single attribute can be determined by multiple attributes.", "A functional dependency can exist between two tables.", "A functional dependency is always symmetric."],
        correct: 0,
        explanation: "If A -> (B, C), then A determines both B and C."
    },
    {
        question: "Which of the following statements is true about a candidate key in functional dependency?",
        options: ["It is a determinant attribute.", "It is a dependent attribute.", "It is a unique identifier for a table.", "It is always composite."],
        correct: 0,
        explanation: "In full functional dependencies for the whole table, the candidate key is the Determinant."
    },
    {
        question: "Which of the following functional dependencies violates the second normal form (2NF)?",
        options: ["Partial dependency", "Transitive dependency", "Multi-valued dependency", "Trivial dependency"],
        correct: 0,
        explanation: "2NF forbids partial dependencies."
    },
    {
        question: "In functional dependency A -> B, what does the arrow symbol (->) represent?",
        options: ["Assignment operator", "Logical AND operator", "Logical OR operator", "Implies or implies not operator (Determinant relationship)"],
        correct: 3,
        explanation: "It means 'A determines B'."
    },
    {
        question: "Which of the following dependencies indicates that two attributes are functionally independent of each other?",
        options: ["Trivial dependency", "Partial dependency", "Multi-valued dependency", "Full dependency"],
        correct: 2,
        explanation: "Context dependent, usually independence implies no FD."
    },
    {
        question: "Which normal form is based on the concept of functional dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correct: 2,
        explanation: "2NF, 3NF, and BCNF are strictly defined by FDs, typically 3NF is the answer in such contexts."
    },
    {
        question: "Which of the following dependencies indicates that changing one attribute can affect another attribute in the same table?",
        options: ["Trivial dependency", "Partial dependency", "Multi-valued dependency", "Full dependency"],
        correct: 3,
        explanation: "Functional dependency implies a constraint where values are linked."
    },
    {
        question: "SQL stands for:",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"],
        correct: 0,
        explanation: "Standard acronym."
    },
    {
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        correct: 0,
        explanation: "SELECT is the command for reading/retrieving data."
    },
    {
        question: "Which SQL command is used to insert new data into a table?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        correct: 3,
        explanation: "INSERT INTO is the command."
    },
    {
        question: "Which SQL command is used to modify existing data in a table?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        correct: 1,
        explanation: "UPDATE is used to modify records."
    },
    {
        question: "Which SQL command is used to remove data from a table?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        correct: 2,
        explanation: "DELETE removes rows."
    },
    {
        question: "Which SQL command is used to create a new table?",
        options: ["CREATE TABLE", "ALTER TABLE", "DROP TABLE", "INSERT TABLE"],
        correct: 0,
        explanation: "CREATE TABLE defines a new table."
    },
    {
        question: "Which SQL command is used to add a new column to an existing table?",
        options: ["CREATE COLUMN", "ALTER COLUMN", "ADD COLUMN", "UPDATE COLUMN"],
        correct: 2,
        explanation: "Used within ALTER TABLE."
    },
    {
        question: "Which SQL command is used to remove a table from a database?",
        options: ["CREATE TABLE", "ALTER TABLE", "DROP TABLE", "DELETE TABLE"],
        correct: 2,
        explanation: "DROP TABLE removes the table structure and data."
    },
    {
        question: "Which SQL command is used to retrieve unique records from a table?",
        options: ["SELECT DISTINCT", "SELECT UNIQUE", "SELECT UNIQUE RECORDS", "SELECT UNIQUE VALUES"],
        correct: 0,
        explanation: "`SELECT DISTINCT` eliminates duplicate rows in the result set."
    },
    {
        question: "Which SQL command is used to combine rows from two or more tables based on related columns?",
        options: ["JOIN", "UNION", "INTERSECT", "MERGE"],
        correct: 0,
        explanation: "JOIN clauses are used to link tables."
    },
    {
        question: "What is a transaction in the context of transaction processing?",
        options: ["A unit of work that is executed as a single, indivisible operation", "A record stored in a database", "A query executed against a database", "A user session"],
        correct: 0,
        explanation: "A transaction is a logical unit of work (LUW)."
    },
    {
        question: "ACID properties of a transaction include:",
        options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Concurrency, Isolation, Durability", "Availability, Consistency, Isolation, Durability", "Availability, Concurrency, Integrity, Durability"],
        correct: 0,
        explanation: "Standard acronym for transaction properties."
    },
    {
        question: "In transaction processing, consistency refers to:",
        options: ["Ensuring that the database remains in a valid state before and after a transaction", "Providing concurrent access", "Recovering the database", "Preserving order"],
        correct: 0,
        explanation: "Consistency ensures database integrity rules are maintained."
    },
    {
        question: "Which of the following is an example of a transaction processing system?",
        options: ["Online banking system", "Word processing", "Video editing", "Gaming console"],
        correct: 0,
        explanation: "Banking involves financial transactions requiring ACID properties."
    },
    {
        question: "Which of the following is an example of a transaction processing system?",
        options: ["Online shopping website", "Personal finance software", "Inventory management", "Social media platform"],
        correct: 0,
        explanation: "Online shopping involves orders and payments."
    },
    {
        question: "The process of undoing or rolling back a transaction to its original state is called:",
        options: ["Recovery", "Commit", "Abort", "Consistency check"],
        correct: 2,
        explanation: "Aborting a transaction triggers a rollback."
    },
    {
        question: "Which of the following concurrency control techniques ensures serializability of transactions?",
        options: ["Locking", "Two-phase commit", "Timestamp ordering", "Checkpointing"],
        correct: 0,
        explanation: "Locking and Timestamp ordering are methods to ensure serializability."
    },
    {
        question: "The process of combining multiple transactions into a single logical unit of work is called:",
        options: ["Transaction commit", "Transaction rollback", "Transaction isolation", "Transaction serialization"],
        correct: 3,
        explanation: "Context dependent, usually called Batch Processing or just Transaction management."
    },
    {
        question: "Which of the following is an example of a distributed transaction processing system?",
        options: ["Online banking system", "Word processing", "Video editing", "Gaming console"],
        correct: 0,
        explanation: "Banking systems often span multiple branches/servers."
    },
    {
        question: "Which of the following is not a component of a transaction processing system?",
        options: ["Transaction manager", "Database server", "Query optimizer", "User interface"],
        correct: 3,
        explanation: "While users interact with it, the UI is the front-end, not a core back-end TPS component."
    },
    {
        question: "What is a data model?",
        options: ["A representation of data relationships in a database", "A programming language", "A storage structure", "A set of rules"],
        correct: 0,
        explanation: "A data model defines the logical structure of the database and relationships."
    },
    {
        question: "Which of the following data models represents data in a hierarchical structure with parent-child relationships?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 2,
        explanation: "The Hierarchical model uses a tree structure (Parent-Child)."
    },
    {
        question: "Which data model represents data as a collection of objects with properties and methods?",
        options: ["Relational", "Network", "Hierarchical", "Object-oriented data model"],
        correct: 3,
        explanation: "Based on Object-Oriented Programming concepts."
    },
    {
        question: "Which data model represents data as a set of tables with rows and columns?",
        options: ["Relational data model", "Network", "Hierarchical", "Object-oriented"],
        correct: 0,
        explanation: "The Relational model uses tables (relations)."
    },
    {
        question: "Which data model allows for complex data structures, relationships, and inheritance?",
        options: ["Relational", "Network", "Hierarchical", "Object-oriented data model"],
        correct: 3,
        explanation: "Inheritance is a key feature of OO models."
    },
    {
        question: "Which data model is based on a mathematical concept called set theory?",
        options: ["Relational data model", "Network", "Hierarchical", "Object-oriented"],
        correct: 0,
        explanation: "Codd defined the Relational model based on Set Theory."
    },
    {
        question: "Which data model represents data as a collection of records connected through pointers?",
        options: ["Relational", "Network data model", "Hierarchical", "Object-oriented"],
        correct: 1,
        explanation: "The Network model uses graph structures connected by pointers/links."
    },
    {
        question: "Which data model is the most widely used for commercial databases?",
        options: ["Relational data model", "Network", "Hierarchical", "Object-oriented"],
        correct: 0,
        explanation: "RDBMS (SQL) dominates the commercial market."
    },
    {
        question: "Which data model is used to describe the structure and behavior of a database system?",
        options: ["Conceptual data model", "Logical data model", "Physical data model", "External data model"],
        correct: 0,
        explanation: "Conceptual models describe the high-level structure/concepts."
    },
    {
        question: "Which data model represents the overall structure of a database without implementation details?",
        options: ["Conceptual data model", "Logical data model", "Physical data model", "External data model"],
        correct: 0,
        explanation: "It is independent of hardware and software."
    },
    {
        question: "Relation algebra is a formalism for manipulating and querying relational databases. Which of the following is true about relation algebra?",
        options: ["It is a procedural language", "It is a declarative language", "It is a physical storage format", "It is a network model"],
        correct: 0,
        explanation: "Relational Algebra is Procedural (specifies how to get data)."
    },
    {
        question: "Which of the following operations in relation algebra is used to select rows from a relation that satisfy a given condition?",
        options: ["Union", "Join", "Projection", "Selection"],
        correct: 3,
        explanation: "The Selection operator filters rows."
    },
    {
        question: "Which of the following operations in relation algebra combines tuples from two relations based on a common attribute?",
        options: ["Union", "Join", "Projection", "Selection"],
        correct: 1,
        explanation: "Join connects tables via common columns."
    },
    {
        question: "The difference operation in relation algebra is used to:",
        options: ["Combine tuples", "Remove duplicates", "Select rows", "Remove tuples from one relation that appear in another"],
        correct: 3,
        explanation: "A - B returns tuples in A but not in B."
    },
    {
        question: "Which of the following operations in relation algebra is used to combine tuples from two relations into a single relation without duplicates?",
        options: ["Union", "Join", "Projection", "Intersection"],
        correct: 0,
        explanation: "Union combines sets."
    },
    {
        question: "What is data recovery in the context of databases?",
        options: ["The process of restoring a database to a previous state after a system failure", "Securing data", "Converting data", "Optimizing performance"],
        correct: 0,
        explanation: "Recovery restores data integrity after crashes."
    },
    {
        question: "Which of the following is a common technique used for data recovery in databases?",
        options: ["Data redundancy", "Data corruption", "SQL injection", "Data normalization"],
        correct: 0,
        explanation: "Backups and logs (redundant data) are essential for recovery."
    },
    {
        question: "What is the primary goal of database security?",
        options: ["Ensuring consistency", "Maintaining integrity", "Protecting data from unauthorized access, use, disclosure, modification, or destruction", "Backing up data"],
        correct: 2,
        explanation: "Security focuses on protection against threats."
    },
    {
        question: "Which of the following is a common method for enhancing data security in databases?",
        options: ["Database normalization", "Database replication", "Database encryption", "Database indexing"],
        correct: 2,
        explanation: "Encryption protects data confidentiality."
    },
    {
        question: "Which of the following is an example of a database security threat?",
        options: ["Replication", "Encryption", "Redundancy", "SQL injection"],
        correct: 3,
        explanation: "SQL Injection is a malicious attack technique."
    }
];
