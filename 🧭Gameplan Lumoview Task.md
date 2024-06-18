
### Step 1: 🤯 First Thoughts 

-  try Google Street view to gain a feeling of what it does and how
-  use CameraControls from react-three/drei
-  loading different file sizes is easy, create 3 different image qualities and load them either by selecting the quality or by loading the lowest res first and lazy loading the other resolutions afterwards.
- original image is a uncompressed jpg -> compress it and make a webp out of it
- blurring of faces: first idea -> use a blurry texture and overlay it (easy solution)
- comment feature: use Html from drei or Text2D for overlaying text

### Step 2: 🖥️ Create the project

- [x]  Create a git repo for the project
- [x]  Create a R3F Project with basic requirements
- [x]  install important dependencies
- [x]  add the images to the project

- [x] Start developing

### Step 3: 🏛️ Implement the base interaction

- [x]  Create a sphere with the image mapped onto it
- [x]  Create the Controls to zoom and pan in the sphere without getting out of it

### Step 4: Different qualities

- Pretty easy task with the help of a Select UI component that switches state of a zustand store.
- First optimize images for the web.
- Switch the different qualities with a global state called: QUALITY
- Only load the smallest image upfront, lazyload the others later

### Step 5: Comment feature

-  With the help of raycasting, get the point where the user clicks
- Create a <Text /> mesh with a <Billboard /> (both from r3/drei) at that point
- create a textfield and share the comment via zustand
- implement a clear button.

### Step 6: Blur feature

- Simple and fast approach: create circles with a meshPhysicalMaterial thats blurry
- Display them also at the points the user clicks (in this case right click)
- Use billboard so its facing the camera at all times.
- Additionally add a clear Button and a scale Input field for some custom blurring
