import { motion } from "framer-motion";

const logos = [
  { name: "ASP.NET Core", color: "#5C2D91" },
  { name: "MS SQL", color: "#003B5C" },
  { name: "RESTful API", color: "#00BFFF" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#007ACC" },
  { name: "Tailwind CSS", color: "#06B6D4" },
];

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-4 overflow-hidden">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ x: 100 }}
            animate={{ x: -100 }}
            transition={{ duration: 5, loop: Infinity, ease: "linear" }}
          >
            <div
              style={{
                width: "100px",
                height: "50px",
                backgroundColor: logo.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
              {logo.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
