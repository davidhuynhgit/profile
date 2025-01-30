## 💡 **Why This Portfolio Website?**

As a **data scientist** with a strong IT-based capacity, I wanted to create a portfolio that not only showcases my technical proficiency but also demonstrates my creative ability to craft visually appealing and user-friendly digital experiences. This website is the culmination of both my coding expertise and passion for building impactful solutions.

The idea behind this portfolio was to blend **modern technologies** such as **Next.js**, **Tailwind CSS**, and **Framer Motion** to create a **responsive**, **interactive**, and **visually engaging** platform that highlights my skillset, experience, and projects. A special thanks to the original template from [CodeBucks27](https://github.com/codebucks27). Here's a breakdown of the journey:

---

### 🚀 **What I Wanted to Achieve**

- **Showcase My Work**: The website allows me to share key projects and demonstrate how I turn data into actionable insights and develop scalable, high-performance web applications.
- **Enhance Front-End Skills**: While my primary expertise lies in **data science**, I wanted to elevate my front-end development abilities. Using **Next.js** and **Tailwind CSS** empowered me to create responsive layouts with modern design and smooth animations with **Framer Motion**.
- **Learn Next.js**: Building the website was an excellent opportunity to dive deep into **Next.js**. It introduced me to server-side rendering (SSR) that is integrated with **GitHub Actions**.
- **Master Animations**: By using **Framer Motion**, I learned how to implement animations that enhanced the overall user experience without sacrificing performance.

---

### 🧠 **What I’ve Learned**

- **Frontend Development**: From wireframing to deployment, I gained a deeper understanding of **responsive design**, **CSS frameworks**, and **UI/UX principles**, ensuring the site adapts seamlessly to all devices.
- **Version Control with Git**: Managing this project with Git reinforced the importance of **workflow management**—key skills in any developer’s toolkit.
- **Personal Branding**: This project taught me how to present my work and **skills** professionally while also building my **online presence**. It’s not just about coding—it’s about **telling a story** and crafting a digital identity.

---

### 🔧 **Technologies Used**

- **Next.js** for creating a fast, SEO-optimized website with **server-side rendering (SSR)**
- **Tailwind CSS** for building responsive, clean, and customizable designs
- **Framer Motion** for adding smooth and interactive animations
- **Git** for version control

---

### 🚀 **In Conclusion**

Creating this portfolio was not only a chance to showcase my work but also an invaluable learning experience that allowed me to combine my **technical skills** with **creative design**. This project will continue to evolve, serving as a testament to my commitment to lifelong learning, and passion for building solutions.

---

### 📋 **Quick Setup Guide**
**1. Clone this project** to your local machine by running the following command in your console (e.g. Visual Studio Code):

`git clone https://github.com/davidhuynhgit/profile.git`

**2. Navigate to the Project Directory**: Change into the project directory:

`cd nextjs-portfolio`

**3. Connect to the Remote Repository**: If you haven't already, add the remote origin (your GitHub repository) to push changes later:
 
`git remote add origin <your-GitHub-repo.git>`

**4. Install Dependencies:** Install the required dependencies with npm or yarn:

`npm install` or `yarn install`

**5. Start the Development Server (local)**: To view the website locally, start the development server:

`npm run dev`

If you run into errors about the export issues, open the file `next.config.js`   comment the line `output: "export",` and uncomment it when you deploy your server online. This will help the NextJS generate a light version of outputs to host your profile.

**6. Launch your profile with GitHub page**:

- Go to your GitHub repository
- Select `⚙️Settings` tab
- On the left panel, select `Pages`
- At `Build and deployment` > `Source`, select `GitHub Actions`
- [If there is no Next.js option, select `browse all workflows`,] Search for `Next.js` then click on `Configure`
- The action has done the heavy lifting for the workflow in `nextjs.yml`, so you just need to click on `Commit Changes...`

**7. Track Your Changes with command lines:**

After making changes to the code, stage your changes:
`git add .`

Commit Your Changes with a clear commit message:
`git commit -v -m "<Describe the changes you made in this pair of quotes>"`

Push Changes to GitHub (e.g., main/gh-page/master branch):
`git push origin main`

Go to your GitHub repository, tab `Actions` to view the underlying workflow for troubleshooting purposes.

