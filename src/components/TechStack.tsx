
import Logo from "./Logo";

const logos=[
    {
        id:1,
        text:"React",
        imgsrc:"./react.png"
    },
    {
        id:2,
        text:"NextJs",
        imgsrc:"./nextjs.png"

    },
    {
        id:3,
        text:"Express",
        imgsrc:"./expressjs.png",
        bg:"white"
    },
    {
        id:4,
        text:"MongoDB",
        imgsrc:"./mongodb.png",
        bg:""
    },
    {
        id:5,
        text:"SQL",
        imgsrc:"./sql.svg",
        bg:""
    },
    {
        id:6,
        text:"AWS",
        imgsrc:"./aws.png",
        bg:""
    },
    {
        id:7,
        text:"GCP",
        imgsrc:"./gcp.png",
        bg:""
    },
    {
        id:8,
        text:"Docker",
        imgsrc:"./docker.png",
        bg:""
    },{
        id:9,
        text:"Kubernetes",
        imgsrc:"./kubernetes.png",
        bg:""
    },
    {
        id:10,
        text:"Tailwind CSS",
        imgsrc:"./tailwind.png",
        bg:""
    },
    {
        id:11,
        text:"TypeScript",
        imgsrc:"./typescript.png",
        bg:""
    }, 
    {
        id:12,
        text:"Postgres",
        imgsrc:"./postgresql.png",
        bg:""
    },
    {
        id:13,
        text:"NodeJS",
        imgsrc:"./nodejs.png",
        bg:""
    },
    {
        id:14,
        text:"Git",
        imgsrc:"./git.png",
        bg:""
    },
    {
        id:15,
        text:"CloudFront",
        imgsrc:"./cloudfront.png",
        bg:""
    },
    {
        id:16,
        text:"Prisma",
        imgsrc:"./prisma.png",
        bg:""
    },
   
]

const TechStack = () => {
  return (
    <div>
      <p className="font-semibold">TechStack</p>
      <div className="flex flex-wrap items-center">
        {logos.map(l=>{
            return(
                <Logo  key={l.id} text={l.text} imgsrc={l.imgsrc} bgcolor={l.bg}/>
            )
        })}
        
      </div>
    </div>
  );
};

export default TechStack;
