interface HeadingProps {
    title : string
}

export default({title} : HeadingProps)=>{
    return <>
       <div className="text-2xl font-inter font-bold">
            {title}
        </div>
    </>
}