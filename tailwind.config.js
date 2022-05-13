module.exports = {
  content: [
    "./pages/index.js",
    "./pages/[id].js",
    "./pages/_app.js",
    "./components/Sidebar.js",
    "./components/SidebarLink.js",
    "./components/Feed.js",
    "./components/Input.js",
    "./components/Login.js",
    "./components/Post.js",
    "./components/Modal.js",
    "./components/Comment.js",
    "./components/Widgets.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
