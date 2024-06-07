 

// eslint-disable-next-line react/prop-types
export const Project = ({img, title, desc}) => {
  return (
    <div className=' flex flex-col items-center mt-24  '>
            <img className='h-48 w-48' src={img} alt="" />
            <p>{title}</p>
            <p>{desc}</p>
    </div>
  )
}
