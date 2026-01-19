// Computer Graphics 2022-23 Question Bank
const cgQuestions2022_23 = [
    {
        question: "The electron beam in a color picture tube is refreshed _____ times in a second to make video realistic.",
        options: ["15", "25", "35", "45"],
        correct: 1,
        explanation: "To create the illusion of continuous motion and avoid flickering, screens must be refreshed frequently. Standard television refresh rates in PAL regions are 25 Hz."
    },
    {
        question: "DUST means:",
        options: ["Direct view storage tube", "Domain view storage tube", "Direct view store tube", "None of the above"],
        correct: 0,
        explanation: "DUST (commonly abbreviated as DVST) is a type of CRT that stores the image charge on a mesh behind the screen, allowing the image to remain without constant refreshing."
    },
    {
        question: "DUST is rarely used today as part of:",
        options: ["Input device", "Output device", "Display systems", "All of the above"],
        correct: 2,
        explanation: "DVSTs were early vector graphics display systems. They have been replaced by modern raster displays."
    },
    {
        question: "In DUST, is there refresh buffer?",
        options: ["Yes", "No"],
        correct: 1,
        explanation: "A key feature of DVST was that it did not require a refresh buffer because the image was stored physically on the storage mesh."
    },
    {
        question: "The electron beam in DUST is designed to draw directly to:",
        options: ["Phosphor", "Storage mesh", "Glass", "None of the above"],
        correct: 1,
        explanation: "The primary electron gun writes the pattern onto a storage grid located just behind the phosphor screen."
    },
    {
        question: "The second grid in DUST is called:",
        options: ["Phosphor", "Storage mesh", "Collector", "None of the above"],
        correct: 2,
        explanation: "The collector is part of the DVST assembly that collects secondary electrons emitted during the writing process."
    },
    {
        question: "Clipping in computer graphics is primarily used for:",
        options: ["zooming", "copying", "removing objects and lines", "None of the above"],
        correct: 2,
        explanation: "Clipping determines which parts of an object are within the visible viewing window and removes parts that are outside."
    },
    {
        question: "Shadow mask method is used in:",
        options: ["Raster scan system", "Random scan system", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "The shadow mask is a technology used in color CRT monitors (raster displays) to ensure electron beams hit the correct colored phosphors."
    },
    {
        question: "Interactive graphics is useful in:",
        options: ["Training pilots", "Computer aided design", "Process control", "All of these"],
        correct: 3,
        explanation: "Interactive graphics are essential for simulations, engineering, and industrial monitoring."
    },
    {
        question: "The origin of computer graphics was developed in:",
        options: ["1950", "1960", "1970", "1990"],
        correct: 0,
        explanation: "The origins are traced to the early 1950s and 60s. 1950 is the earliest viable decade listed."
    },
    {
        question: "The term business graphics came into use in late:",
        options: ["1950", "1960", "1970", "1990"],
        correct: 2,
        explanation: "By the late 1970s, computers began to be used for charts and graphs in business contexts."
    },
    {
        question: "Computer graphics is used in many DTP software as:",
        options: ["Photoshop", "Paint brush", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "Desktop Publishing (DTP) uses image editing software like Photoshop and drawing tools like Paintbrush."
    },
    {
        question: "Any CRT based display must be refreshing at least _____ times a second.",
        options: ["20", "30", "40", "10"],
        correct: 1,
        explanation: "A refresh rate of at least 30 Hz is generally required to avoid noticeable flicker."
    },
    {
        question: "The standardization is needed:",
        options: ["To make application programs more portable", "To increase their utility", "To allow them to use in different application environment", "None of the above"],
        correct: 0,
        explanation: "Graphics standards (like GKS) ensure software can run on different hardware without rewriting code."
    },
    {
        question: "GKS stands for:",
        options: ["Graphics kernel system", "Graphics kernel stands", "Generic kernel system", "None of the above"],
        correct: 0,
        explanation: "GKS is the first international standard for two-dimensional computer graphics."
    },
    {
        question: "GKS was developed by the:",
        options: ["International standards organization", "National standard organization", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "GKS was standardized by ISO."
    },
    {
        question: "The resolution of raster scan display is:",
        options: ["Low", "High", "Medium", "None"],
        correct: 0,
        explanation: "Historically, raster systems had lower line resolution than random scan (vector) systems which drew smooth continuous lines."
    },
    {
        question: "Random scan systems are designed for:",
        options: ["Line drawing application", "Pixel drawing application", "Color drawing application", "None of the above"],
        correct: 0,
        explanation: "Random scan displays draw lines directly from point to point (vectors)."
    },
    {
        question: "Solid pattern in random scan display is _____ to fill.",
        options: ["Difficult", "Easy", "Not fill", "None of the above"],
        correct: 0,
        explanation: "Filling solid areas in vector displays requires drawing many lines, which is slow and inefficient."
    },
    {
        question: "Raster scan is _____ expensive than random scan.",
        options: ["More", "Less", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Raster scan uses standard TV technology, making it cheaper to mass-produce than the specialized vector hardware."
    },
    {
        question: "Two basic techniques for producing color display with a CRT are:",
        options: ["Shadow mask and random scan", "Beam penetration method and shadow mask method", "Random scan and raster scan", "None of above"],
        correct: 1,
        explanation: "These are the two primary historical methods for color CRTs."
    },
    {
        question: "In beam penetration method of color CRT, two layers of phosphor coated are:",
        options: ["Red and blue", "Red and green", "Blue and green", "None of the above"],
        correct: 1,
        explanation: "Beam penetration tubes typically use Red and Green layers."
    },
    {
        question: "The process of displaying 3D into a 2D display unit is called as:",
        options: ["Resolution", "Projection", "Rasterization", "Transformation"],
        correct: 1,
        explanation: "Projection maps 3D coordinates onto a 2D viewing plane."
    },
    {
        question: "A shadow mask CRT has _____ phosphor color dots at each pixel position.",
        options: ["1", "2", "3", "None of the above"],
        correct: 2,
        explanation: "A pixel is a triad of Red, Green, and Blue phosphor dots."
    },
    {
        question: "Which color is produced with the green and red dots only?",
        options: ["Blue", "Yellow", "Magenta", "White"],
        correct: 1,
        explanation: "In RGB color mixing, Red + Green = Yellow."
    },
    {
        question: "Which color is produced with the blue and red dots?",
        options: ["Blue", "Yellow", "Magenta", "White"],
        correct: 2,
        explanation: "In RGB color mixing, Red + Blue = Magenta."
    },
    {
        question: "Cyan color is produced when the blue and green are activated:",
        options: ["Equally", "Unequally", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "Pure Cyan is equal parts Blue and Green light."
    },
    {
        question: "Which technique of color CRT is used for production of realistic image.",
        options: ["Shadow mask method", "Beam penetration method", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "Shadow mask allows for a full range of colors (True Color), unlike beam penetration which is limited to 4-5 colors."
    },
    {
        question: "In which method of CRT, convergence problem occurs?",
        options: ["Beam penetration method", "Shadow mask method", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Aligning the three electron beams to hit the same pixel is a complex challenge called convergence."
    },
    {
        question: "Beam penetration method is used in:",
        options: ["Random scan system", "Raster scan system", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "Beam penetration was used in vector monitors to provide color without sacrificing line sharpness."
    },
    {
        question: "Shadow mask method is used in:",
        options: ["Random scan system", "Raster scan system", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Shadow mask is used in raster scan systems."
    },
    {
        question: "Graphics data is computed by processor in form of:",
        options: ["Electrical signals", "Analog signals", "Digital signals", "None of the above"],
        correct: 2,
        explanation: "Computers process data digitally (binary)."
    },
    {
        question: "An example of impact device is:",
        options: ["Electrostatic printer", "Inkjet printer", "Line printer", "Laser printer"],
        correct: 2,
        explanation: "Line printers strike the paper physically."
    },
    {
        question: "To generate the characters, which are required?",
        options: ["Hardware", "Software", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "Requires both physical print heads/screens and software fonts/drivers."
    },
    {
        question: "The method which uses array of dots for generating a character is called:",
        options: ["Stoke method", "Bitmap method", "Star bust method", "None of the above"],
        correct: 1,
        explanation: "Characters are defined by a grid (bitmap) of dots."
    },
    {
        question: "The hardware devices contain:",
        options: ["Color printer/ black white printer", "Plotters", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "Both are types of output hardware."
    },
    {
        question: "An example of black and white laser printer is:",
        options: ["HP 4000", "QMS", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "HP 4000 is a classic monochrome laser printer."
    },
    {
        question: "An example of color printer is:",
        options: ["HP 4000", "QMS", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "QMS was an early manufacturer of color laser printers."
    },
    {
        question: "Non impact use various techniques to combine three color pigment to produce a range of color patterns.",
        options: ["Cyan, magenta and yellow", "Cyan, white and black", "Cyan, white and yellow", "Black, magenta and yellow"],
        correct: 0,
        explanation: "Printers use the CMY subtractive color model."
    },
    {
        question: "Printers produce output by either:",
        options: ["Impact method", "Non-impact method", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "The two main categories of printer technology."
    },
    {
        question: "What is the name of temporary memory where the graphics data is stored to be displayed on screen?",
        options: ["RAM", "ROM", "Frame buffer", "None of the above"],
        correct: 2,
        explanation: "The frame buffer stores the bitmap that is currently shown on the display."
    },
    {
        question: "The division of the computer screen into rows and columns that define the no. of pixels to display a picture is called:",
        options: ["Persistence", "Resolution", "Encapsulated post script", "None of the above"],
        correct: 1,
        explanation: "Resolution is defined by grid dimensions (e.g., 1024x768)."
    },
    {
        question: "LCD means:",
        options: ["Liquid crystal displays", "Liquid crystal data", "Liquid chrome data", "None of the above"],
        correct: 0,
        explanation: "Standard acronym."
    },
    {
        question: "LCD are commonly used in:",
        options: ["Calculators", "Portable", "Laptop computers", "All of these"],
        correct: 3,
        explanation: "LCDs are standard for all portable devices."
    },
    {
        question: "LCD is a/an _____ device.",
        options: ["Emissive", "Non-emissive", "Gas discharge", "None of the above"],
        correct: 1,
        explanation: "LCDs manipulate light but do not create it (they require a backlight)."
    },
    {
        question: "Plasma panel is a/an _____ device.",
        options: ["Emissive", "Non-emissive", "Expensive", "None of the above"],
        correct: 0,
        explanation: "Plasma cells emit their own light."
    },
    {
        question: "Plasma device converts:",
        options: ["Electrical energy into light", "Light into electrical energy", "Light into graphical energy", "None of the above"],
        correct: 0,
        explanation: "Electricity excites gas into plasma which emits photons."
    },
    {
        question: "Plasma panels have _____ resolution.",
        options: ["High", "Good", "Both (A) and (B)", "Low"],
        correct: 1,
        explanation: "Plasma offered high quality resolution."
    },
    {
        question: "Plasma panels are also called:",
        options: ["Liquid crystal display", "Gas discharge display", "Non-emissive display", "None of the above"],
        correct: 1,
        explanation: "They work by discharging electricity through gas."
    },
    {
        question: "The basic graphical interactions are:",
        options: ["Pointing", "Positioning", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "Core GUI interactions involve pointing and positioning."
    },
    {
        question: "GUI means:",
        options: ["Graphical user interface", "Graphical user interaction", "Graphics uniform interaction", "None of the above"],
        correct: 0,
        explanation: "Standard acronym."
    },
    {
        question: "Which one is the basic input device in GUI?",
        options: ["Mouse", "Graphics tablet", "Voice system", "Touch panel"],
        correct: 0,
        explanation: "The mouse is the primary tool for navigating a GUI."
    },
    {
        question: "Pen or inkjet plotters use the following devices:",
        options: ["Drum", "Flat bed", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "The two main mechanical types of plotters."
    },
    {
        question: "The graphics can be:",
        options: ["Drawing", "Photograph, movies", "Simulation", "All of these"],
        correct: 3,
        explanation: "Graphics encompasses vector drawings, raster images, and simulations."
    },
    {
        question: "Computer graphics was first used by:",
        options: ["William Fetter in 1960", "James Fetter in 1969", "James Gosling in 1991", "John Taylor in 1980"],
        correct: 0,
        explanation: "William Fetter coined the term 'Computer Graphics'."
    },
    {
        question: "The components of interactive computer graphics are:",
        options: ["A light pen", "Display unit", "Bank of switches", "All of these"],
        correct: 3,
        explanation: "Components of early interactive systems like Sketchpad."
    },
    {
        question: "Personal computer became powerful during the late:",
        options: ["1960", "1970", "1980", "1950"],
        correct: 2,
        explanation: "The 1980s saw the rise of the PC (IBM, Apple)."
    },
    {
        question: "Which of the following is not the pattern of line?",
        options: ["Dotted line", "Dashed line", "Dark line", "All of the above"],
        correct: 2,
        explanation: "'Dark' is a property of color/intensity, not a line pattern style (like dotted or dashed)."
    },
    {
        question: "Which environment has been one of the most accepted tool for computer graphics in business and graphics design studios?",
        options: ["graphics", "Macintosh", "quake", "multimedia"],
        correct: 1,
        explanation: "The Mac is the historical standard for graphic design."
    },
    {
        question: "Graphics is one of the _____ major key element in design of multimedia application.",
        options: ["Five", "Three", "Four", "Eight"],
        correct: 0,
        explanation: "Text, Audio, Video, Graphics, Animation."
    },
    {
        question: "Three dimensional graphics become popular in games designing, multimedia and animation during the late:",
        options: ["1960", "1970", "1980", "1990"],
        correct: 3,
        explanation: "The 1990s brought 3D hardware acceleration to the consumer market."
    },
    {
        question: "The quake, one of the first fully 3D games was released in year:",
        options: ["1996", "1976", "1986", "1999"],
        correct: 0,
        explanation: "Quake was released in 1996."
    },
    {
        question: "Types of computer graphics are:",
        options: ["Vector and raster", "Scalar and raster", "Vector and scalar", "None of the above"],
        correct: 0,
        explanation: "The two fundamental image types."
    },
    {
        question: "Vector graphics is composed of:",
        options: ["Pixels", "Paths", "Palette", "None of the above"],
        correct: 1,
        explanation: "Defined by mathematical paths (lines/curves)."
    },
    {
        question: "Raster graphics are composed of:",
        options: ["Pixels", "Paths", "Palette", "None of the above"],
        correct: 0,
        explanation: "Defined by a grid of pixels."
    },
    {
        question: "Raster images are more commonly called:",
        options: ["Pix map", "bitmap", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "'Bitmap' is the common term for raster images."
    },
    {
        question: "Pixel can be arranged in a regular:",
        options: ["One-dimensional grid", "Two-dimensional grid", "Three-dimensional grid", "None of the above"],
        correct: 1,
        explanation: "A screen is a 2D grid."
    },
    {
        question: "The brightness of each pixel is:",
        options: ["Compatible", "Incompatible", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Each pixel's brightness is controlled independently."
    },
    {
        question: "Each pixel has _____ basic color components.",
        options: ["Two or three", "One or two", "Three or four", "None of the above"],
        correct: 2,
        explanation: "RGB (3) or RGBA (4)."
    },
    {
        question: "The quantity of an image depends on:",
        options: ["No. of pixels used by image", "No. of lines used by image", "No. of resolutions used by image", "None of the above"],
        correct: 0,
        explanation: "Quality (resolution) depends on pixel count."
    },
    {
        question: "Higher the number of pixels, _____ the image quality.",
        options: ["Bad", "Better", "Smaller", "None of above"],
        correct: 1,
        explanation: "More pixels = higher resolution."
    },
    {
        question: "A palette can be defined as a finite set of colors for managing the:",
        options: ["Analog images", "Digital images", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Palettes are used in indexed color digital images."
    },
    {
        question: "Display card are:",
        options: ["VGA", "EGA", "Both (A) and (B)", "None of above"],
        correct: 2,
        explanation: "Historical graphics standards."
    },
    {
        question: "Display card is used for the purpose of:",
        options: ["Sending graphics data to input unit", "Sending graphics data to output unit", "Receiving graphics data from output unit", "None of the above"],
        correct: 1,
        explanation: "Sends signal to the monitor (output)."
    },
    {
        question: "Several graphics image file formats that are used by most of graphics system are:",
        options: ["GIF", "JPEG", "TIFF", "All of these"],
        correct: 3,
        explanation: "Common formats."
    },
    {
        question: "The GIF format is much _____ to be downloaded or uploaded over the www.",
        options: ["Slower", "Faster", "Medium", "None of the above"],
        correct: 1,
        explanation: "Small file size made it fast for early web use."
    },
    {
        question: "Once a file is saved in JPEG format, some data is lost:",
        options: ["Temporarily", "Permanently", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "JPEG is lossy compression."
    },
    {
        question: "EPS image file format is used for:",
        options: ["Vector graphics", "Bitmap", "Both (A) and (B)", "None of the above"],
        correct: 2,
        explanation: "EPS can contain both vectors and bitmaps."
    },
    {
        question: "TIFF (tagged image file format) are used for:",
        options: ["Vector graphics", "Bitmap", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Standard for high-quality bitmaps."
    },
    {
        question: "EPS means:",
        options: ["Entire post script", "Entire post scale", "Encapsulated post script", "None of the above"],
        correct: 2,
        explanation: "Standard acronym."
    },
    {
        question: "DDA stands for:",
        options: ["Direct differential analyzer", "Data differential analyzer", "Direct difference analyzer", "Digital differential analyzer"],
        correct: 3,
        explanation: "A line drawing algorithm."
    },
    {
        question: "The process of repositioning an object along a circular path is called:",
        options: ["Translation", "Rotation", "Scaling", "None of the above"],
        correct: 1,
        explanation: "Moving points by an angle around a pivot."
    },
    {
        question: "Which of the following is must be specified to generate a rotation?",
        options: ["Rotational distance", "Rotation angle", "Co-ordinates", "None of the above"],
        correct: 1,
        explanation: "The angle determines the extent of rotation."
    },
    {
        question: "Which of the following transformations is used for altering the object's size?",
        options: ["Translation", "Scaling", "Rotation", "None of the above"],
        correct: 1,
        explanation: "Changing size is scaling."
    },
    {
        question: "Two-dimensional color models are:",
        options: ["RGB and CMKY", "RBG and CYMK", "RGB and CMYK", "None of the above"],
        correct: 2,
        explanation: "The standard additive (RGB) and subtractive (CMYK) models."
    },
    {
        question: "RGB models are used for:",
        options: ["Computer display", "Printing", "Painting", "None of the above"],
        correct: 0,
        explanation: "Monitors use additive light."
    },
    {
        question: "CMYK models are used for:",
        options: ["Computer display", "Printing", "Painting", "None of the above"],
        correct: 1,
        explanation: "Printers use subtractive ink."
    },
    {
        question: "The intersection of three primary RGB color produces:",
        options: ["White color", "Black color", "Magenta color", "Blue color"],
        correct: 0,
        explanation: "Red + Green + Blue light = White."
    },
    {
        question: "The intersection of primary CMYK color produces:",
        options: ["White color", "Black color", "Cyan color", "Magenta color"],
        correct: 1,
        explanation: "All pigments mixed together absorb all light (theoretically Black)."
    },
    {
        question: "The RGB model displays a much _____ percentage of the visible band as compared to CMYK.",
        options: ["Lesser", "Larger", "Medium", "None of the above"],
        correct: 1,
        explanation: "RGB has a wider color gamut."
    },
    {
        question: "The Cohen-Sutherland algorithm divides the two-dimensional space in how many regions?",
        options: ["4", "8", "9", "23"],
        correct: 2,
        explanation: "A 3x3 grid of regions (viewport + 8 surrounding)."
    },
    {
        question: "Each bit represents:",
        options: ["One color", "Two colors", "Three colors", "None of the above"],
        correct: 1,
        explanation: "Binary 0 or 1."
    },
    {
        question: "RGB true color model has _____ color depth.",
        options: ["24 bit", "32 bit", "64 bit", "None of the above"],
        correct: 0,
        explanation: "8 bits per channel x 3 channels = 24 bits."
    },
    {
        question: "Which one of the following is the most commonly used and basic input device?",
        options: ["Mouse", "Printer", "Scanner", "Keyboard"],
        correct: 3,
        explanation: "The fundamental input device."
    },
    {
        question: "Grey scale images have a maximum color depth of:",
        options: ["8 bit", "16 bit", "24 bit", "32 bit"],
        correct: 0,
        explanation: "256 shades of gray fit in 8 bits."
    },
    {
        question: "Graphics with limited features is known as:",
        options: ["Active graphics", "Passive graphics", "Grayscale image", "None of the above"],
        correct: 1,
        explanation: "Non-interactive graphics."
    },
    {
        question: "Computer of present time have much higher memory and _____ storage capacity.",
        options: ["much smaller", "much bigger", "much slower", "None of the above"],
        correct: 1,
        explanation: "Modern computers are defined by large storage."
    },
    {
        question: "CRT means:",
        options: ["Common ray tube", "Cathode ray tube", "Common ray tube", "None of the above"],
        correct: 1,
        explanation: "Standard acronym."
    },
    {
        question: "Refresh CRT consists of:",
        options: ["Glass wrapper", "The phosphor viewing surface", "The electron gun assembly", "All of the above"],
        correct: 3,
        explanation: "The components of a CRT."
    },
    {
        question: "The amount of time the phosphor produce light or shine is controlled by chemical composition of the phosphor. This is known as:",
        options: ["Persistence", "Resistance", "Generators", "None of the above"],
        correct: 0,
        explanation: "Persistence is the glow duration."
    }
];