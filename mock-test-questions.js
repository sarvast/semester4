const mockTestQuestions = [
    {
        question: "The refresh rate below which a picture flickers is:",
        options: ["25", "30", "35", "60"],
        correct: 0,
        explanation: "The critical fusion frequency is typically around 25-30 Hz. Below 25 times per second, the human eye perceives the gap between frames as a flicker."
    },
    {
        question: "GKS stands for:",
        options: ["Graphics Kernel System", "Graphics Kernel Stands", "Generic Kernel System", "None of these"],
        correct: 0,
        explanation: "GKS was the first international ISO standard for two-dimensional computer graphics programming."
    },
    {
        question: "Which algorithm is a faster method for calculating pixel positions?",
        options: ["Bresenham's line algorithm", "Parallel line algorithm", "Midpoint algorithm", "DDA line algorithm"],
        correct: 0,
        explanation: "Bresenham's algorithm uses only integer addition and subtraction, avoiding the slow floating-point arithmetic and rounding used in DDA."
    },
    {
        question: "The second grid in DVST (Direct View Storage Tube) is called:",
        options: ["Phosphor", "Storage grid", "Collector", "None"],
        correct: 1,
        explanation: "The storage grid (or mesh) holds the positively charged pattern of the image, controlling where electrons from the flood gun hit the phosphor screen."
    },
    {
        question: "Which of the following is not a common bitmap-based file type extension?",
        options: ["ODT", "TIFF", "PNG", "PCX"],
        correct: 0,
        explanation: "ODT (OpenDocument Text) is a word processing document format, whereas TIFF, PNG, and PCX are raster graphics formats."
    },
    {
        question: "For reducing the size of the object, we set both scale factors:",
        options: ["Less than 0", "Greater than 1", "Equals to 1", "In between 0 & 1"],
        correct: 3,
        explanation: "A scaling factor where 0 < s < 1 shrinks the object. Factors > 1 enlarge it."
    },
    {
        question: "An RGB color system with 24 bits of storage per pixel is known as:",
        options: ["Color CRT", "True-color system", "RGB monitor", "Color-Depth"],
        correct: 1,
        explanation: "24 bits allow for 2^24 (approx 16.7 million) color variations, which is sufficient to represent all colors distinguishable by the human eye ('True Color')."
    },
    {
        question: "Shadow mask method is used in:",
        options: ["Raster scan system", "Random scan system", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "The shadow mask is a metal plate used in color CRT monitors (raster displays) to ensure electron beams hit the correct colored phosphors."
    },
    {
        question: "Interactive computer graphics involves ______ way communication between computer and the user.",
        options: ["One", "Two", "Three", "Four"],
        correct: 1,
        explanation: "Interactive graphics implies a dialogue where the user provides input and the computer responds with visual output."
    },
    {
        question: "Aspect ratio means:",
        options: ["Number of pixels", "Ratio of vertical points to horizontal points", "Ratio of horizontal points to vertical points", "Both (B) & (C)"],
        correct: 2,
        explanation: "Aspect ratio is universally defined as Width:Height (Horizontal:Vertical)."
    },
    {
        question: "The intersection of three primary RGB colors produces:",
        options: ["White color", "Black color", "Magenta color", "Blue color"],
        correct: 0,
        explanation: "RGB is an additive color model. Adding Red, Green, and Blue light at full intensity creates White light."
    },
    {
        question: "The intersection of primary CMYK colors produces:",
        options: ["White color", "Black color", "Cyan color", "Magenta color"],
        correct: 1,
        explanation: "CMYK is a subtractive model (pigments). Mixing all primaries theoretically absorbs all light, resulting in Black."
    },
    {
        question: "Which transformation slants the shape of objects?",
        options: ["Rotation", "Shear", "Reflection", "Translation"],
        correct: 1,
        explanation: "Shearing distorts an object such that its shape appears to slide in layers, creating a slanted effect."
    },
    {
        question: "In Bresenham's, if the distance d1 < d2 then decision parameter Pk is:",
        options: ["Positive", "Equal", "Negative", "Both (A) & (B)"],
        correct: 2,
        explanation: "If d1 < d2, the lower pixel is closer. In standard derivations, negative Pk indicates the lower pixel should be chosen."
    },
    {
        question: "A multimedia file:",
        options: ["Is same as any other regular file", "Must be accessed at specific rate", "Stored on remote server can't be delivered to its client", "None of these"],
        correct: 1,
        explanation: "Continuous media (audio/video) are isochronous, meaning they require a constant data rate for playback to be meaningful."
    },
    {
        question: "Positive values for the rotation angle define:",
        options: ["Counter clockwise rotations about the endpoints", "Counter clockwise translations about the pivot points", "Counter clockwise rotations about the pivot points", "Clockwise rotations about the pivot points"],
        correct: 2,
        explanation: "In standard graphics coordinate systems, positive angles (θ) denote Counter-Clockwise (CCW) rotation."
    },
    {
        question: "The process of digitizing a given picture definition into a set of pixel intensity for storage in the frame buffer is called:",
        options: ["Rasterization", "Encoding", "Scan conversion", "True color system"],
        correct: 2,
        explanation: "Scan conversion (or rasterization) is the process of taking vector primitives (lines, circles) and calculating which pixels on the grid represent them."
    },
    {
        question: "DDA stands for:",
        options: ["Direct differential analyzer", "Data differential analyzer", "Direct difference analyzer", "Digital differential analyzer"],
        correct: 3,
        explanation: "It is an incremental scan-conversion method for lines."
    },
    {
        question: "Which of the following is must be specified to generate a rotation?",
        options: ["Rotational distance", "Rotation angle", "Co-ordinates", "None of the above"],
        correct: 1,
        explanation: "The angle (θ) determines the extent of the rotation around the pivot point."
    },
    {
        question: "The region against which an object is to be clipped is called as:",
        options: ["Clipping", "Clipping region", "Clip window", "None of them"],
        correct: 2,
        explanation: "The rectangular area defining what is visible is technically referred to as the clipping window."
    },
    {
        question: "LCD is a/an ______ device.",
        options: ["Emissive", "Non-emissive", "Gas discharge", "None of these"],
        correct: 1,
        explanation: "LCDs do not generate their own light; they manipulate light from a backlight."
    },
    {
        question: "Plasma panel is a/an ______ device.",
        options: ["Emissive", "Non-emissive", "Expensive", "None of these"],
        correct: 0,
        explanation: "Plasma cells generate light via gas discharge (creating plasma), making them emissive displays."
    },
    {
        question: "Vector graphics is composed of:",
        options: ["Pixels", "Paths", "Palette", "None of these"],
        correct: 1,
        explanation: "Vector images are defined by mathematical formulas (paths, lines, curves) rather than a grid of pixels."
    },
    {
        question: "The Cohen-Sutherland algorithm divides the two-dimensional space into how many regions?",
        options: ["4", "8", "9", "23"],
        correct: 2,
        explanation: "It uses a 4-bit code to define 9 regions: the central viewport + 8 surrounding regions (Top, Bottom, Left, Right, and corners)."
    },
    {
        question: "Moving Picture Experts Group (MPEG) is used to compress:",
        options: ["Frames", "Images", "Audio", "Video"],
        correct: 3,
        explanation: "MPEG is the industry standard for video and audio compression."
    },
    {
        question: "Which technique of color CRT is used for production of realistic images?",
        options: ["Shadow mask method", "Beam penetration method", "Both (A) and (B)", "None of the above"],
        correct: 0,
        explanation: "Shadow mask technology allows for full-color display (True Color) by varying R, G, B intensities, unlike Beam Penetration which is limited to ~4 colors."
    },
    {
        question: "In which method of CRT does the convergence problem occur?",
        options: ["Beam penetration method", "Shadow mask method", "Both (A) and (B)", "None of these"],
        correct: 1,
        explanation: "Convergence involves aligning the three electron beams (R, G, B) to hit the exact same pixel location on the screen, a difficulty specific to multi-gun CRTs."
    },
    {
        question: "What are the criteria for good line drawing?",
        options: ["Line should be drawn rapidly", "Line should be appearing straight & terminated accurately", "Line should have constant density", "All of these"],
        correct: 3,
        explanation: "A good algorithm must be fast, accurate (straight), and visually uniform (constant density)."
    },
    {
        question: "The term 'transform' means:",
        options: ["Change", "Increase", "No change", "All of these"],
        correct: 0,
        explanation: "In graphics, transformations involve changing the position, orientation, or size of an object."
    },
    {
        question: "Which of the following is not a graphical software?",
        options: ["CorelDraw", "MAYA", "Flash", "None of these"],
        correct: 3,
        explanation: "CorelDraw (Vector), Maya (3D), and Flash (Animation) are all graphics software."
    },
    {
        question: "The basic geometric transformations are:",
        options: ["Rotation", "Reflection", "Shear", "All of these"],
        correct: 3,
        explanation: "Translation, Rotation, Scaling, Reflection, and Shear are all fundamental affine transformations."
    },
    {
        question: "Random scan systems are designed for:",
        options: ["Line drawing application", "Pixel drawing application", "Color drawing application", "None of these"],
        correct: 0,
        explanation: "Random scan (Vector) displays draw lines directly from point A to point B, making them ideal for wireframe/CAD line drawings."
    },
    {
        question: "The resolution of raster scan display is:",
        options: ["Low", "High", "Medium", "None"],
        correct: 0,
        explanation: "Compared to vector displays which draw smooth continuous lines, raster displays use a discrete grid which introduces aliasing (jaggies), historically considered lower resolution for line work."
    },
    {
        question: "Beam penetration method is used in:",
        options: ["Random scan system", "Raster scan system", "Both (A) and (B)", "None of these"],
        correct: 0,
        explanation: "It was used to provide limited color to vector (random scan) monitors."
    },
    {
        question: "A good example of hypermedia file is:",
        options: ["The internet", "Level 1 video disc", "Audiotape", "Videotape"],
        correct: 0,
        explanation: "The World Wide Web is the most prominent implementation of hypermedia (linked text, audio, video, graphics)."
    },
    {
        question: "TIFF (Tagged Image File Format) is used for:",
        options: ["Vector graphics", "Bitmap", "Both (A) & (B)", "None of these"],
        correct: 1,
        explanation: "TIFF is a standard format for high-quality raster (bitmap) images."
    },
    {
        question: "Which color is produced with the green and red dots only?",
        options: ["Blue", "Yellow", "Magenta", "White"],
        correct: 1,
        explanation: "In additive color mixing, Red + Green = Yellow."
    },
    {
        question: "The display controller converts 0s or 1s into:",
        options: ["TV monitors", "Video signal", "Electrical signal", "None of these"],
        correct: 1,
        explanation: "The controller reads the digital frame buffer and generates the video signal (analog or digital) for the monitor."
    },
    {
        question: "Reflection of a point about x-axis, followed by a counter-clockwise rotation of 90°, is equivalent to reflection about the line:",
        options: ["y = -x", "x = y", "y = x", "x = 0"],
        correct: 2,
        explanation: "Reflection X: (x,y) → (x,-y). Rotation 90°: (x,y) → (-y,x). Applying rotation to (x,-y) gives (y,x). Swapping x and y is reflection about y = x."
    },
    {
        question: "To change the position of a circle or ellipse we translate:",
        options: ["Center coordinates", "Center coordinates and redraw the figure in the new location", "Outline coordinates", "All of these"],
        correct: 1,
        explanation: "Translation involves adding offsets to the defining center point and regenerating the shape at the new location."
    },
    {
        question: "The translation distances (dx, dy) is called as:",
        options: ["Translation vector", "Shift vector", "Both (A) and (B)", "None of these"],
        correct: 2,
        explanation: "The offset values are collectively known as the translation vector or shift vector."
    },
    {
        question: "Which algorithm is a faster method for calculating pixel position?",
        options: ["Bresenham's line algorithm", "Parallel line algorithm", "Midpoint algorithm", "DDA line algorithm"],
        correct: 0,
        explanation: "Bresenham's uses integer math, which is faster computationally than the floating point math in DDA."
    },
    {
        question: "On a raster system, lines are plotted with:",
        options: ["Lines", "Dots", "Pixels", "All of these"],
        correct: 2,
        explanation: "A raster display is a grid of discrete pixels."
    },
    {
        question: "GIF stands for:",
        options: ["Global Image Format", "Graphics Interchange Format", "Graphics Image Format", "None of the above"],
        correct: 1,
        explanation: "Standard acronym."
    },
    {
        question: "Which of the following is a technique to blend two or more images to form a new image?",
        options: ["Modeling", "Morphing", "Animating", "Warping"],
        correct: 1,
        explanation: "Morphing is the animation technique of smoothly transforming one image into another."
    },
    {
        question: "How many attributes control the characteristics of sound?",
        options: ["5", "4", "3", "2"],
        correct: 1,
        explanation: "Generally cited as Frequency (Pitch), Amplitude (Loudness), Waveform (Timbre), and Duration."
    },
    {
        question: "EPS image file format is used for:",
        options: ["Vector graphics", "Bitmap", "Both (A) & (B)", "None of these"],
        correct: 2,
        explanation: "Encapsulated PostScript (EPS) can contain both vector drawings and bitmap previews."
    },
    {
        question: "In 2D translation, a point (x,y) can move to the new position (x',y') by using the equation:",
        options: ["x' = x + tx, y' = y + ty", "x' = x - tx, y' = y - ty", "x' = x * tx, y' = y * ty", "None of the above"],
        correct: 0,
        explanation: "Translation is an additive transformation."
    },
    {
        question: "The process of removal of hidden surfaces is termed as:",
        options: ["Clipping", "Copying", "Culling", "Shorting"],
        correct: 2,
        explanation: "Specifically 'Back-face culling' refers to removing surfaces that face away from the viewer."
    },
    {
        question: "Which file creates a perfect reproduction of the original images?",
        options: ["Shockwave", "Nx view", "GIF", "JPG"],
        correct: 2,
        explanation: "Among the options, GIF uses lossless LZW compression (for indexed colors), whereas JPG is lossy."
    },
    {
        question: "DTP means:",
        options: ["Drawing text picture", "Desktop publishing", "Dask town publishing", "None of these"],
        correct: 1,
        explanation: "Standard acronym."
    },
    {
        question: "Any CRT based display must be refreshed at least ______ times a second.",
        options: ["20", "30", "40", "10"],
        correct: 1,
        explanation: "To avoid flicker, refresh rates must typically be above 30 Hz."
    },
    {
        question: "Scaling transformation is said to be homogeneous (uniform) if:",
        options: ["Sx ≠ Sy", "Sx > Sy", "Sx = Sy", "None of them"],
        correct: 2,
        explanation: "Uniform scaling occurs when the scaling factor is the same in all directions."
    },
    {
        question: "The number of pixels stored in the frame buffer of a graphics system is known as:",
        options: ["Resolution", "Depth", "Persistence", "None"],
        correct: 0,
        explanation: "Resolution defines the dimensions (width × height) of the pixel grid."
    },
    {
        question: "The Bezier curve obtained from four control points is called:",
        options: ["Square Bezier curve", "Cubic Bezier curve", "Hectare Bezier curve", "Rectangle Bezier curve"],
        correct: 1,
        explanation: "4 control points define a degree-3 curve, which is a Cubic Bezier."
    },
    {
        question: "Identify the odd one out:",
        options: ["Mouse", "Keyboard", "Trackball", "Space ball"],
        correct: 1,
        explanation: "Mouse, Trackball, and Space ball are pointing/positioning devices; the Keyboard is a text input device."
    },
    {
        question: "Refreshing is not needed in DVST because of the presence of:",
        options: ["Primary gun", "Flood gun", "Focusing anode", "Control grid"],
        correct: 1,
        explanation: "The flood gun continuously floods the storage mesh with electrons to keep the image visible without redrawing."
    },
    {
        question: "Which of the following allows for 8 mirror images?",
        options: ["Parabola", "Ellipse", "Hyperbola", "Circle"],
        correct: 3,
        explanation: "A circle has 8-way symmetry (each octant is a reflection of the others)."
    },
    {
        question: "The simplest output primitive is:",
        options: ["Straight line", "Straight line segment", "Point", "Circle"],
        correct: 2,
        explanation: "The point (pixel) is the fundamental building block."
    },
    {
        question: "Digitizing a picture definition into a set of intensity values is known as:",
        options: ["Digitization", "Scan conversion", "Refreshing", "Scanning"],
        correct: 1,
        explanation: "Converting vector data to raster pixel data."
    },
    {
        question: "What is the name of temporary memory where the graphics data is stored to be displayed on screen?",
        options: ["RAM", "ROM", "Frame buffer", "None of these"],
        correct: 2,
        explanation: "The frame buffer holds the bitmap that is currently shown on the display."
    },
    {
        question: "If extended line proceeds from inside to the outside of the corresponding boundary line it is denoted as:",
        options: ["p < 0", "p > 0", "p = 0", "None of them"],
        correct: 1,
        explanation: "In Liang-Barsky clipping, p > 0 indicates the line is exiting the window (Inside → Outside)."
    },
    {
        question: "The hardware devices contain:",
        options: ["Color printer/ black white printer", "Plotters", "Both (A) and (B)", "None of these"],
        correct: 2,
        explanation: "Both are types of hardcopy output hardware."
    },
    {
        question: "Raster images are more commonly called:",
        options: ["Pix map", "Bitmap", "Both (A) and (B)", "None of the above"],
        correct: 1,
        explanation: "Bitmap is the standard term for a grid of pixels."
    },
    {
        question: "Coordinates of window are known as:",
        options: ["Screen coordinates", "World coordinates", "Device coordinates", "Cartesian coordinates"],
        correct: 1,
        explanation: "The 'window' is defined in the user's 'World' coordinate system."
    },
    {
        question: "Coordinates of viewport are known as:",
        options: ["World coordinates", "Polar coordinates", "Screen coordinates", "Cartesian coordinates"],
        correct: 2,
        explanation: "The 'viewport' is defined in the 'Screen' (Device) coordinate system."
    },
    {
        question: "A graphics package contains:",
        options: ["No. of housekeeping task such as cleaning a display screen", "No. of housekeeping task such as initializing parameters", "Both (A) & (B)", "None of the above"],
        correct: 2,
        explanation: "Graphics libraries handle low-level initialization and buffer clearing."
    },
    {
        question: "If a point (x,y) is reflected about an axis which is normal to the XY plane and passing through the origin, the reflected point is:",
        options: ["(x,y)", "(x,-y)", "(-x,-y)", "(-x,y)"],
        correct: 2,
        explanation: "Reflection through the origin (or Z-axis) negates both coordinates."
    },
    {
        question: "The 2D scaling equation in the matrix form is:",
        options: ["P' = P + S", "P' = S * P", "P' = P * S", "P' = S + P"],
        correct: 1,
        explanation: "Scaling is a multiplication operation: New Point = Scale Matrix × Old Point."
    },
    {
        question: "The text colour in presentation should contrast with the color of:",
        options: ["CPU", "Frame", "Stack", "Background"],
        correct: 3,
        explanation: "Basic visual design principle for readability."
    },
    {
        question: "How many step process for creating a 3D animation are required?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "Typically: Modeling, Animation, and Rendering."
    },
    {
        question: "The application in entertainment are:",
        options: ["Satellite", "Televisions", "Internet", "All of these"],
        correct: 3,
        explanation: "These are all mediums for delivering multimedia entertainment."
    },
    {
        question: "The quantity of an image depends on:",
        options: ["No. of pixels used by image", "No. of lines used by image", "No. of resolutions used by image", "None"],
        correct: 0,
        explanation: "More pixels = higher resolution and detail."
    },
    {
        question: "The electron beam in DUST is designed to draw directly to:",
        options: ["Phosphor", "Storage mesh", "Glass", "None of these"],
        correct: 1,
        explanation: "The writing gun targets the storage mesh to store the image pattern."
    },
    {
        question: "Clipping in computer graphics is primarily used for:",
        options: ["zooming", "copying", "removing objects and lines", "All of the above"],
        correct: 2,
        explanation: "Clipping removes parts of the image outside the viewable area."
    },
    {
        question: "The term business graphics came into use in late:",
        options: ["1950", "1960", "1970", "1990"],
        correct: 2,
        explanation: "Business graphics (charts/graphs) became a distinct category in the late 70s."
    },
    {
        question: "Computer graphics is used in many DTP software as:",
        options: ["Photoshop", "Paint brush", "Both (A) and (B)", "None of these"],
        correct: 2,
        explanation: "DTP (Desktop Publishing) utilizes image editors (Photoshop) and drawing tools."
    },
    {
        question: "The standardization is needed:",
        options: ["To make application programs more portable", "To increase their utility", "To allow them to use in different application environment", "All of the above"],
        correct: 3,
        explanation: "Standards like GKS and OpenGL allow software to run on various hardware platforms."
    },
    {
        question: "The method which uses array of dots for generating a character is called:",
        options: ["Stoke method", "Bitmap method", "Star bust method", "None of these"],
        correct: 1,
        explanation: "Characters defined by a grid of dots are bitmap fonts."
    },
    {
        question: "What is the use of homogeneous coordinates and matrix representation?",
        options: ["To treat all 3 transformations in a consistent way", "To scale", "To rotating", "To shear the object"],
        correct: 0,
        explanation: "Homogeneous coordinates allow translation (addition) to be treated as multiplication, just like rotation and scaling."
    },
    {
        question: "Which color is produced with the blue and red dots?",
        options: ["Blue", "Yellow", "Magenta", "White"],
        correct: 2,
        explanation: "Red + Blue = Magenta in the additive color model."
    },
    {
        question: "Cyan color is produced when the blue and green are activated:",
        options: ["Equally", "Unequally", "Both (A) and (B)", "None of these"],
        correct: 0,
        explanation: "Equal parts Blue and Green create Cyan."
    },
    {
        question: "Solid pattern in random scan display is ______ to fill.",
        options: ["Difficult", "Easy", "Not fill", "None of these"],
        correct: 0,
        explanation: "Vector displays must draw many strokes to fill a shape, which is slow and inefficient compared to raster."
    },
    {
        question: "In Bresenham's line algorithm, if the distance d1 < d2, then decision parameter Pk is:",
        options: ["Positive", "Equal", "Negative", "Both (A) & (B)"],
        correct: 2,
        explanation: "Negative Pk usually corresponds to choosing the lower pixel (closer distance d1)."
    },
    {
        question: "Grey scale images have a maximum color depth of:",
        options: ["8 bit", "16 bit", "24 bit", "32 bit"],
        correct: 0,
        explanation: "8 bits provide 256 shades of gray, the standard for grayscale images."
    },
    {
        question: "Computer of present time have much higher memory and ______ storage capacity.",
        options: ["Much smaller", "Much bigger", "Much slower", "None of these"],
        correct: 1,
        explanation: "Modern computers are defined by vast storage and memory."
    },
    {
        question: "CRT means:",
        options: ["Common ray tube", "Cathode ray tube", "Common ray tube", "None of these"],
        correct: 1,
        explanation: "Standard acronym."
    },
    {
        question: "The amount of time the phosphor produce light or shine is controlled by chemical composition of the phosphor. This is known as:",
        options: ["Persistence", "Resistance", "Generators", "None of these"],
        correct: 0,
        explanation: "Persistence is the duration of the phosphorescent glow."
    },
    {
        question: "The electron beam in a color picture tube is refreshed ______ times in a second to make video realistic.",
        options: ["15", "25", "35", "45"],
        correct: 1,
        explanation: "Standard TV refresh rate (PAL) is 25 fps."
    },
    {
        question: "DUST means:",
        options: ["Direct view storage tube", "Domain view storage tube", "Direct view store tube", "None of these"],
        correct: 0,
        explanation: "DUST is an acronym for DVST."
    },
    {
        question: "An example of impact device is:",
        options: ["Electrostatic printer", "Inkjet printer", "Line printer", "Laser printer"],
        correct: 2,
        explanation: "Line printers strike the paper physically."
    },
    {
        question: "To generate the characters, which are required:",
        options: ["Hardware", "Software", "Both (A) and (B)", "None of these"],
        correct: 2,
        explanation: "Requires display hardware and font software."
    },
    {
        question: "CMYK models are used for:",
        options: ["Computer display", "Printing", "Painting", "None of these"],
        correct: 1,
        explanation: "Subtractive colors (CMYK) are used for ink/pigment."
    },
    {
        question: "The RGB model displays a much ______ percentage of the visible band as compared to CMYK.",
        options: ["Lesser", "Larger", "Medium", "None of these"],
        correct: 1,
        explanation: "The RGB color gamut is wider than the CMYK printable gamut."
    },
    {
        question: "Which one of the following is the most commonly used and basic input device?",
        options: ["Mouse", "Printer", "Scanner", "Keyboard"],
        correct: 3,
        explanation: "The keyboard is the primary input device."
    },
    {
        question: "Raster scan is ______ expensive than random scan.",
        options: ["More", "Less", "Both (A) and (B)", "None of these"],
        correct: 1,
        explanation: "Raster technology (TVs) is mass-produced and cheaper than vector displays."
    },
    {
        question: "Two basic techniques for producing color display with a CRT are:",
        options: ["Shadow mask and random scan", "Beam penetration method and shadow mask method", "Random scan and raster scan", "None of these"],
        correct: 1,
        explanation: "These are the two CRT color technologies."
    },
    {
        question: "In beam penetration method of color CRT, two layers of phosphor coated are:",
        options: ["Red and blue", "Red and green", "Blue and green", "None of these"],
        correct: 1,
        explanation: "Beam penetration uses Red and Green layers."
    },
    {
        question: "The process of displaying 3D into a 2D display unit is called as:",
        options: ["Resolution", "Projection", "Rasterization", "Transformation"],
        correct: 1,
        explanation: "Mapping 3D world coordinates to a 2D view plane."
    },
    {
        question: "A shadow mask CRT has ______ phosphor color dots at each pixel position.",
        options: ["1", "2", "3", "None of these"],
        correct: 2,
        explanation: "A triad of Red, Green, and Blue."
    }
];