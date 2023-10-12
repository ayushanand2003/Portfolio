import {motion} from "framer-motion";

const Test = () => {

    // const [open,setOpen]=useState(false)

    const variants={
        visible:(i)=>({
            opacity:1,
            x:100,
            transition:{delay:i*0.3},
        }),
        hidden:{opacity:0},
    };

    const items =["item 1"," item 2","item 3","item 4"];



  return (
    <div className="course">
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {items.map((item,i)=> (
                <motion.li variants={variants} key={item} custom={i}>
                    {item}
                </motion.li>
            ))}
        </motion.ul>

        {/* <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}
    </div>
  );
};

export default Test