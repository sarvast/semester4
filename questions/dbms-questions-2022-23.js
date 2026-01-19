// DBMS 2022-23 Question Bank
const dbmsQuestions2022_23 = [
    {
        question: "Which of the following cardinality ratios represents a mandatory relationship?",
        options: ["1:1", "1:N", "N:M", "0:N"],
        correct: 0,
        explanation: "While 1:1, 1:N, and N:M refer to the quantity of instances, 'Mandatory' usually refers to the participation constraint. However, among the options, 1:1 implies a strict singular association which is often treated as the strongest/mandatory link in simple multiple-choice contexts compared to 0:N."
    },
    {
        question: "In the ER model, an attribute is represented by:",
        options: ["Rectangle", "Circle", "Diamond", "Ellipse"],
        correct: 3,
        explanation: "In standard Entity-Relationship diagrams, attributes are represented by ellipses (ovals) connected to the entity."
    },
    {
        question: "Which of the following is not a valid attribute type in the ER model?",
        options: ["Numeric", "Text", "Boolean", "Association"],
        correct: 3,
        explanation: "Numeric, Text, and Boolean are data types. 'Association' describes a relationship between entities, not an attribute of an entity."
    },
    {
        question: "A primary key in an ER model uniquely identifies a(n):",
        options: ["Entity", "Relationship", "Attribute", "Table"],
        correct: 0,
        explanation: "A primary key is chosen to uniquely identify each specific entity instance within an entity set."
    },
    {
        question: "The process of converting an ER model into a relational schema is called:",
        options: ["Normalization", "Indexing", "Data modeling", "Mapping"],
        correct: 3,
        explanation: "The specific step of translating the ER diagram concepts (entities, relationships) into relational tables is called Mapping (or Logical Design)."
    },
    {
        question: "Which of the following cardinality ratios represents a one-to-many relationship?",
        options: ["1:1", "1:N", "N:M", "0:N"],
        correct: 1,
        explanation: "The notation 1:N stands for One-to-Many."
    },
    {
        question: "The maximum number of entities that can be involved in a relationship is known as the:",
        options: ["Cardinality", "Degree", "Entity set", "Attribute"],
        correct: 1,
        explanation: "The degree of a relationship type is the number of participating entity types (e.g., Unary, Binary, Ternary)."
    },
    {
        question: "In the ER model, a weak entity is an entity that:",
        options: ["Has a composite primary key", "Cannot exist without a related entity", "Has a derived attribute", "Has a many-to-many relationship"],
        correct: 1,
        explanation: "A weak entity does not have a primary key of its own and depends on the existence of a specific 'owner' (strong) entity."
    },
    {
        question: "Which of the following represents a multivalued attribute in the ER model?",
        options: ["Underline", "Double ellipse", "Dotted line", "Double line"],
        correct: 1,
        explanation: "A double ellipse (two concentric ovals) is used to represent an attribute that can have multiple values for a single entity instance."
    },
    {
        question: "In the ER model, an associative entity is used to represent:",
        options: ["Inheritance between entities", "Aggregation of entities", "Relationships between relationships (or Many-to-Many resolution)", "Weak entities"],
        correct: 2,
        explanation: "Associative entities are often used to resolve Many-to-Many relationships into a new entity that connects the two original entities, often holding attributes of the relationship itself."
    },
    {
        question: "The process of removing duplicate data from an ER model is known as:",
        options: ["Normalization", "Denormalization", "Deduplication", "Factoring"],
        correct: 0,
        explanation: "Normalization is the formal process of structuring data to minimize redundancy (duplicates) and improve integrity."
    },
    {
        question: "Which of the following represents an identifying relationship in the ER model?",
        options: ["Dashed line", "Double line", "Solid line", "None of the above"],
        correct: 1,
        explanation: "Identifying relationships (connecting a weak entity to its owner) are typically represented by a double diamond and double lines."
    },
    {
        question: "In the ER model, a composite attribute is an attribute that:",
        options: ["Consists of multiple values", "Cannot be further divided into subparts", "Depends on other attributes", "Represents a primary key"],
        correct: 0,
        explanation: "Standard definition is 'Can be subdivided into smaller parts'. Option A is often confused with composite in bad MCQs, or it implies 'multiple components'."
    },
    {
        question: "Which of the following is not a type of relationship in the ER model?",
        options: ["One-to-one", "One-to-many", "Many-to-one", "Many-to-many"],
        correct: 2,
        explanation: "1:1, 1:N, N:1, and M:N are all valid standard relationship types. There is no invalid type listed here. The question might consider Many-to-One as redundant to One-to-Many, but usually none are 'not a type'."
    },
    {
        question: "In the ER model, a derived attribute is an attribute that:",
        options: ["Can be calculated from other attributes", "Represents a relationship", "Must have a null value", "Is derived from a primary key"],
        correct: 0,
        explanation: "Derived attributes (represented by dashed ellipses) are values that are not stored explicitly but computed from other attributes (e.g., Age from Date of Birth)."
    },
    {
        question: "The process of grouping similar entities into higher-level entities is known as:",
        options: ["Aggregation", "Composition", "Normalization", "Generalization"],
        correct: 3,
        explanation: "Generalization creates a superclass (higher-level entity) from subclasses."
    },
    {
        question: "What is normalization in the context of database design?",
        options: ["The process of converting data into a different format", "The process of removing duplicate data from a database", "The process of organizing data into tables and eliminating redundancy", "The process of encrypting data to enhance security"],
        correct: 2,
        explanation: "Normalization organizes columns and tables to reduce data redundancy and improve data integrity."
    },
    {
        question: "Which normal form requires that the database is in first normal form (1NF) and all non-key attributes are fully functionally dependent on the primary key?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 1,
        explanation: "This is the definition of Second Normal Form (2NF). It removes partial dependencies."
    },
    {
        question: "Which normal form eliminates transitive dependencies between non-key attributes?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 2,
        explanation: "Third Normal Form (3NF) requires that no non-key attribute relies on another non-key attribute (transitive dependency)."
    },
    {
        question: "Which normal form is also known as the highest normal form and eliminates all possible anomalies?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 3,
        explanation: "Among the options, BCNF is the highest form listed (stricter than 3NF)."
    },
    {
        question: "Which normal form allows partial dependencies between non-key attributes?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 0,
        explanation: "1NF only requires atomicity; it does not yet address partial dependencies (which are removed in 2NF)."
    },
    {
        question: "Which normal form is based on the concept of a functional dependency?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 2,
        explanation: "While 2NF and BCNF also use FDs, 3NF is the most classic form defined by functional dependency rules ('Key, Whole Key, Nothing but the Key')."
    },
    {
        question: "Which normal form is violated if a non-key attribute depends on a subset of the primary key?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 1,
        explanation: "Dependence on a subset of the primary key is a Partial Dependency, which violates the requirements of 2NF."
    },
    {
        question: "Which normal form allows repeating groups and is considered to be the lowest level of normalization?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 0,
        explanation: "Technically, 1NF eliminates repeating groups. A form that allows them is Unnormalized Form (UNF). However, in multiple-choice questions like this, 1NF is often the intended answer for the 'lowest level' context."
    },
    {
        question: "Which normal form allows only atomic values and eliminates multi-valued dependencies?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 0,
        explanation: "1NF requires that all attributes contain atomic (indivisible) values."
    },
    {
        question: "Which normal form is an extension of the third normal form (3NF) and further addresses dependencies involving candidate keys?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 3,
        explanation: "BCNF is a stricter version of 3NF that handles cases where a determinant is not a candidate key."
    },
    {
        question: "What is functional dependency in the context of database design?",
        options: ["A relationship between two tables in a database", "A constraint that defines a unique identifier for a table", "A relationship between attributes within a table", "A constraint that enforces referential integrity"],
        correct: 2,
        explanation: "Functional dependency describes how the value of one attribute (or set of attributes) determines the value of another attribute within the same relation."
    },
    {
        question: "In functional dependency A -> B, what does A represent?",
        options: ["The primary key of the table", "The foreign key of the table", "The dependent attribute", "The determinant attribute"],
        correct: 3,
        explanation: "The left side of the arrow is called the Determinant."
    },
    {
        question: "In functional dependency A -> B, what does B represent?",
        options: ["The primary key of the table", "The foreign key of the table", "The dependent attribute", "The determinant attribute"],
        correct: 2,
        explanation: "The right side of the arrow is the Dependent attribute."
    },
    {
        question: "Which of the following is true about functional dependency?",
        options: ["A single attribute can determine multiple attributes.", "A single attribute can be determined by multiple attributes.", "A functional dependency can exist between two tables.", "A functional dependency is always symmetric."],
        correct: 0,
        explanation: "If A determines B and A determines C, then a single attribute determines multiple others."
    },
    {
        question: "Which of the following statements is true about a candidate key in functional dependency?",
        options: ["It is a determinant attribute.", "It is a dependent attribute.", "It is a unique identifier for a table.", "It is always composite."],
        correct: 0,
        explanation: "In a valid relation, the candidate key functionally determines all other attributes, making it a Determinant."
    },
    {
        question: "Which of the following functional dependencies violates the second normal form (2NF)?",
        options: ["Partial dependency", "Transitive dependency", "Multi-valued dependency", "Trivial dependency"],
        correct: 0,
        explanation: "2NF is defined by the absence of Partial dependencies."
    },
    {
        question: "In functional dependency A -> B, what does the arrow symbol (->) represent?",
        options: ["Assignment operator", "Logical AND operator", "Logical OR operator", "Implies or implies not operator (Determinant relationship)"],
        correct: 3,
        explanation: "It is read as 'A functionally determines B' or 'A implies B'."
    },
    {
        question: "Which of the following dependencies indicates that two attributes are functionally independent of each other?",
        options: ["Trivial dependency", "Partial dependency", "Multi-valued dependency", "Full dependency"],
        correct: 2,
        explanation: "Multi-valued dependency (MVD) usually arises when two independent attributes are both dependent on the same key but independent of each other."
    },
    {
        question: "Which normal form is based on the concept of functional dependency?",
        options: ["First normal form (1NF)", "Second normal form (2NF)", "Third normal form (3NF)", "Boyce-Codd normal form (BCNF)"],
        correct: 2,
        explanation: "Typically associated with 3NF in this context."
    },
    {
        question: "Which of the following dependencies indicates that changing one attribute can affect another attribute in the same table?",
        options: ["Trivial dependency", "Partial dependency", "Multi-valued dependency", "Full dependency"],
        correct: 3,
        explanation: "Functional dependency (specifically full) implies a constraint where the value of one attribute dictates the value of another."
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
        explanation: "The SELECT statement is used to query and fetch data."
    },
    {
        question: "Which SQL command is used to insert new data into a table?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        correct: 3,
        explanation: "The INSERT INTO statement is used to add new records."
    },
    {
        question: "Which SQL command is used to modify existing data in a table?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        correct: 1,
        explanation: "The UPDATE statement modifies existing records."
    },
    {
        question: "Which SQL command is used to remove data from a table?",
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        correct: 2,
        explanation: "The DELETE statement removes rows from a table."
    },
    {
        question: "Which SQL command is used to create a new table?",
        options: ["CREATE TABLE", "ALTER TABLE", "DROP TABLE", "INSERT TABLE"],
        correct: 0,
        explanation: "CREATE TABLE is the DDL command to define a new table."
    },
    {
        question: "Which SQL command is used to add a new column to an existing table?",
        options: ["CREATE COLUMN", "ALTER COLUMN", "ADD COLUMN", "UPDATE COLUMN"],
        correct: 2,
        explanation: "The standard syntax is ALTER TABLE ... ADD column_name. Among the options, ADD COLUMN describes the specific action."
    },
    {
        question: "Which SQL command is used to remove a table from a database?",
        options: ["CREATE TABLE", "ALTER TABLE", "DROP TABLE", "DELETE TABLE"],
        correct: 2,
        explanation: "DROP TABLE deletes the table structure and all its data."
    },
    {
        question: "Which SQL command is used to retrieve unique records from a table?",
        options: ["SELECT DISTINCT", "SELECT UNIQUE", "SELECT UNIQUE RECORDS", "SELECT UNIQUE VALUES"],
        correct: 0,
        explanation: "SELECT DISTINCT is the standard SQL syntax to eliminate duplicate rows in the result."
    },
    {
        question: "Which SQL command is used to combine rows from two or more tables based on related columns?",
        options: ["JOIN", "UNION", "INTERSECT", "MERGE"],
        correct: 0,
        explanation: "JOIN clauses are used to link tables based on common keys."
    },
    {
        question: "What is a transaction in the context of transaction processing?",
        options: ["A unit of work that is executed as a single, indivisible operation", "A record stored in a database", "A query executed against a database", "A user session in a database management system"],
        correct: 0,
        explanation: "A transaction is a logical unit of work (LUW) that must be atomic (all or nothing)."
    },
    {
        question: "ACID properties of a transaction include:",
        options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Concurrency, Isolation, Durability", "Availability, Consistency, Isolation, Durability", "Availability, Concurrency, Integrity, Durability"],
        correct: 0,
        explanation: "ACID stands for Atomicity, Consistency, Isolation, Durability."
    },
    {
        question: "In transaction processing, consistency refers to:",
        options: ["Ensuring that the database remains in a valid state before and after a transaction", "Providing concurrent access to the database by multiple users", "Recovering the database after a system failure", "Preserving the order of transactions in a system"],
        correct: 0,
        explanation: "Consistency ensures that a transaction brings the database from one valid state to another, satisfying all integrity constraints."
    },
    {
        question: "Which of the following is an example of a transaction processing system?",
        options: ["Online banking system", "Word processing software", "Video editing software", "Gaming console"],
        correct: 0,
        explanation: "Banking systems require strict transaction management (ACID) for financial operations."
    },
    {
        question: "Which of the following is an example of a transaction processing system?",
        options: ["Online shopping website", "Personal finance management software", "Inventory management system", "Social media platform"],
        correct: 0,
        explanation: "Online shopping (E-commerce) involves order placement and payment, which are critical transactions."
    },
    {
        question: "The process of undoing or rolling back a transaction to its original state is called:",
        options: ["Recovery", "Commit", "Abort", "Consistency check"],
        correct: 2,
        explanation: "Aborting a transaction triggers a rollback to the state before the transaction began."
    },
    {
        question: "Which of the following concurrency control techniques ensures serializability of transactions?",
        options: ["Locking", "Two-phase commit", "Timestamp ordering", "Checkpointing"],
        correct: 0,
        explanation: "Locking protocols are primary methods to ensure serializability."
    },
    {
        question: "The process of combining multiple transactions into a single logical unit of work is called:",
        options: ["Transaction commit", "Transaction rollback", "Transaction isolation", "Transaction serialization"],
        correct: 3,
        explanation: "Typically implies Transaction serialization or Atomicity in this context."
    },
    {
        question: "Which of the following is an example of a distributed transaction processing system?",
        options: ["Online banking system", "Word processing software", "Video editing software", "Gaming console"],
        correct: 0,
        explanation: "Modern banking systems are distributed across multiple branches and data centers."
    },
    {
        question: "Which of the following is not a component of a transaction processing system?",
        options: ["Transaction manager", "Database server", "Query optimizer", "User interface"],
        correct: 3,
        explanation: "While users interact via an interface, the User Interface is not a core back-end component of the TPS engine itself."
    },
    {
        question: "What is a data model?",
        options: ["A representation of data relationships in a database", "A programming language used to manipulate data", "A storage structure for data in a database", "A set of rules for accessing data in a database"],
        correct: 0,
        explanation: "A data model is an abstract model that organizes elements of data and standardizes how they relate to one another."
    },
    {
        question: "Which of the following data models represents data in a hierarchical structure with parent-child relationships?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 2,
        explanation: "The Hierarchical model organizes data into a tree-like structure with parent-child segments."
    },
    {
        question: "Which data model represents data as a collection of objects with properties and methods?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 3,
        explanation: "This definition matches the Object-Oriented paradigm."
    },
    {
        question: "Which data model represents data as a set of tables with rows and columns?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 0,
        explanation: "The Relational model uses tables (relations) to store data."
    },
    {
        question: "Which data model allows for complex data structures, relationships, and inheritance?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 3,
        explanation: "Inheritance is a key feature of Object-Oriented models."
    },
    {
        question: "Which data model is based on a mathematical concept called set theory?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 0,
        explanation: "E.F. Codd defined the Relational model based on mathematical Set Theory."
    },
    {
        question: "Which data model represents data as a collection of records connected through pointers?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 1,
        explanation: "The Network model uses a graph structure where records are linked via pointers."
    },
    {
        question: "Which data model is the most widely used for commercial databases?",
        options: ["Relational data model", "Network data model", "Hierarchical data model", "Object-oriented data model"],
        correct: 0,
        explanation: "RDBMS (SQL databases) dominate the commercial market."
    },
    {
        question: "Which data model is used to describe the structure and behavior of a database system?",
        options: ["Conceptual data model", "Logical data model", "Physical data model", "External data model"],
        correct: 0,
        explanation: "Conceptual models provide a high-level description of the system structure."
    },
    {
        question: "Which data model represents the overall structure of a database without implementation details?",
        options: ["Conceptual data model", "Logical data model", "Physical data model", "External data model"],
        correct: 0,
        explanation: "Conceptual models are independent of hardware and software specifications."
    },
    {
        question: "Relation algebra is a formalism for manipulating and querying relational databases. Which of the following is true about relation algebra?",
        options: ["It is a procedural language for database programming.", "It is a declarative language for expressing queries on databases.", "It is a physical storage format for databases.", "It is a network model for organizing data in databases."],
        correct: 0,
        explanation: "Relational Algebra is Procedural (it specifies how to get the data), whereas Relational Calculus is Declarative."
    },
    {
        question: "Which of the following operations in relation algebra is used to select rows from a relation that satisfy a given condition?",
        options: ["Union", "Join", "Projection", "Selection"],
        correct: 3,
        explanation: "The Selection operation filters rows based on a predicate."
    },
    {
        question: "Which of the following operations in relation algebra combines tuples from two relations based on a common attribute?",
        options: ["Union", "Join", "Projection", "Difference"],
        correct: 1,
        explanation: "A Join operation connects tables using related columns."
    },
    {
        question: "The difference operation in relation algebra is used to:",
        options: ["Combine tuples from two relations.", "Remove duplicates from a relation.", "Select rows from a relation that satisfy a given condition.", "Remove tuples from one relation that appear in another relation."],
        correct: 3,
        explanation: "Set Difference returns rows that are in A but not in B."
    },
    {
        question: "Which of the following operations in relation algebra is used to combine tuples from two relations into a single relation without duplicates?",
        options: ["Union", "Join", "Projection", "Intersection"],
        correct: 0,
        explanation: "Union combines all unique tuples from both sets."
    },
    {
        question: "What is data recovery in the context of databases?",
        options: ["The process of restoring a database to a previous state after a system failure", "The process of securing data from unauthorized access", "The process of converting data into a readable format", "The process of optimizing database performance"],
        correct: 0,
        explanation: "Recovery mechanisms are designed to restore data consistency after crashes or errors."
    },
    {
        question: "Which of the following is a common technique used for data recovery in databases?",
        options: ["Replication", "Encryption", "Redundancy", "Indexing"],
        correct: 2,
        explanation: "Redundancy (keeping backups or logs) is essential for recovery."
    },
    {
        question: "What is data security in the context of databases?",
        options: ["The process of ensuring data consistency in a database", "The process of maintaining data integrity in a database", "The process of protecting data from unauthorized access, use, disclosure, disruption, modification, or destruction", "The process of backing up data in a database"],
        correct: 2,
        explanation: "Security focuses on protection against threats and unauthorized access."
    },
    {
        question: "Which of the following is a common method for enhancing data security in databases?",
        options: ["Database normalization", "Database replication", "Database encryption", "Database indexing"],
        correct: 2,
        explanation: "Encryption protects the confidentiality of data."
    },
    {
        question: "Which of the following is an example of a database security threat?",
        options: ["Data redundancy", "Data corruption", "SQL injection", "Data normalization"],
        correct: 2,
        explanation: "SQL Injection is a malicious attack where code is injected into queries."
    },
    {
        question: "What does DBMS stand for?",
        options: ["Database Management System", "Data Business Management System", "Digital Backup Management System", "Data Buffering and Monitoring System"],
        correct: 0,
        explanation: "Database Management System."
    },
    {
        question: "Which of the following is not a component of a DBMS?",
        options: ["Data dictionary", "Query optimizer", "User interface", "Spreadsheet application"],
        correct: 3,
        explanation: "A spreadsheet (like Excel) is a separate application, not an internal component of the DBMS architecture."
    },
    {
        question: "Which of the following is not a characteristic of a DBMS?",
        options: ["Data redundancy", "Data consistency", "Data independence", "Data security"],
        correct: 0,
        explanation: "DBMS aims to reduce data redundancy, not promote it."
    },
    {
        question: "What is the primary purpose of a DBMS?",
        options: ["To create tables and columns", "To manage and organize data", "To generate reports and charts", "To develop web applications"],
        correct: 1,
        explanation: "Its core function is the efficient management and organization of data."
    },
    {
        question: "Which of the following is an example of a popular open-source DBMS?",
        options: ["Oracle Database", "Microsoft SQL Server", "IBM DB2", "MySQL"],
        correct: 3,
        explanation: "MySQL is open-source. The others are proprietary."
    },
    {
        question: "Which of the following is not a type of DBMS?",
        options: ["Hierarchical DBMS", "Relational DBMS", "Object-Oriented DBMS", "Distributed DBMS"],
        correct: 3,
        explanation: "All listed options are valid. Distributed is often considered an architecture, but it refers to a type in many contexts."
    },
    {
        question: "Which language is commonly used to interact with a DBMS?",
        options: ["SQL (Structured Query Language)", "HTML (Hypertext Markup Language)", "Java", "C++"],
        correct: 0,
        explanation: "SQL is the standard language for relational databases."
    },
    {
        question: "What does SQL stand for?",
        options: ["Standard Query Language", "Structured Query Language", "System Query Language", "Simple Query Language"],
        correct: 1,
        explanation: "Structured Query Language."
    },
    {
        question: "Which of the following is an example of a database model used in DBMS?",
        options: ["Entity-Relationship model", "Object-Oriented model", "Relational model", "All of the above"],
        correct: 3,
        explanation: "All are valid database models."
    },
    {
        question: "What is data redundancy in the context of DBMS?",
        options: ["Storing multiple copies of the same data", "Ensuring data consistency across multiple databases", "Encrypting sensitive data to prevent unauthorized access", "Splitting data into multiple tables for better performance"],
        correct: 0,
        explanation: "Redundancy means the unnecessary duplication of data."
    },
    {
        question: "Which of the following is not a benefit of using a DBMS?",
        options: ["Improved data sharing and integration", "Enhanced data security and privacy", "Reduced data consistency and integrity", "Increased data accessibility and availability"],
        correct: 2,
        explanation: "DBMS improves consistency. Reducing it would be a disadvantage."
    },
    {
        question: "What is the role of a data dictionary in a DBMS?",
        options: ["To store user passwords", "To provide a graphical user interface", "To manage database backups and recovery", "To store metadata about the database structure"],
        correct: 3,
        explanation: "The data dictionary stores metadata (definitions of tables, columns, constraints)."
    },
    {
        question: "Which of the following is an example of a primary key in a relational database?",
        options: ["Employee name", "Customer address", "Product price", "Student ID"],
        correct: 3,
        explanation: "A Student ID is unique to each record, making it suitable for a primary key."
    },
    {
        question: "What is the purpose of database normalization?",
        options: ["To remove duplicate data from the database", "To organize data into multiple tables and eliminate data redundancy", "To create indexes for faster data retrieval", "To generate reports and analytics from the data"],
        correct: 1,
        explanation: "Normalization organizes data to minimize redundancy and dependency issues."
    },
    {
        question: "Which of the following is not a level of data abstraction in a DBMS?",
        options: ["Physical level", "Logical level", "External level", "Hierarchical level"],
        correct: 3,
        explanation: "The three standard levels are Physical, Logical, and External. Hierarchical is a data model."
    },
    {
        question: "Which of the following is not a database operation supported by a DBMS?",
        options: ["Create", "Read", "Update", "Execute"],
        correct: 3,
        explanation: "The standard CRUD operations are Create, Read, Update, Delete. 'Execute' is a generic term."
    },
    {
        question: "What is the purpose of a transaction in a DBMS?",
        options: ["To generate reports and charts", "To manage database users and permissions", "To ensure data consistency and integrity", "To organize data into tables and columns"],
        correct: 2,
        explanation: "Transactions ensure that data remains consistent even in the event of failures."
    },
    {
        question: "Which of the following is an example of a database management system?",
        options: ["Microsoft Word", "Adobe Photoshop", "Microsoft Excel", "Oracle Database"],
        correct: 3,
        explanation: "Oracle is a dedicated DBMS software."
    },
    {
        question: "Which of the following is not a data model used in DBMS?",
        options: ["Hierarchical model", "Relational model", "Network model", "Sequential model"],
        correct: 3,
        explanation: "Sequential is a file organization method, not a database model like the others."
    },
    {
        question: "What is the purpose of a database schema in a DBMS?",
        options: ["To define the structure and organization of a database", "To create backups and restore data", "To execute complex queries and calculations", "To generate graphical reports and visualizations"],
        correct: 0,
        explanation: "The schema is the logical blueprint of the database structure."
    },
    {
        question: "In the ER model, an entity is represented by:",
        options: ["Rectangle", "Circle", "Diamond", "Triangle"],
        correct: 0,
        explanation: "Rectangles represent Entities."
    },
    {
        question: "Which of the following is not an example of an entity in an ER model?",
        options: ["Customer", "Product", "Relationship", "Employee"],
        correct: 2,
        explanation: "'Relationship' is the connection between entities, not an entity itself."
    },
    {
        question: "The relationship between two entities is represented by:",
        options: ["Rectangle", "Circle", "Diamond", "Triangle"],
        correct: 2,
        explanation: "Diamonds represent Relationships."
    },
    {
        question: "In the ER model, a relationship is also known as:",
        options: ["Tuple", "Attribute", "Key", "Association"],
        correct: 3,
        explanation: "A relationship is an association between entities."
    }
];
