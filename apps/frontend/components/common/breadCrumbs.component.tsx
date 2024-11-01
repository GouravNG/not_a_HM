import Link from "next/link"

type BreadCrumbType = {
  path: string
  link: string
}

type BreadCrumbsType = {
  breadCrumb: BreadCrumbType[]
}

const BreadCrumbs: React.FC<BreadCrumbsType> = ({ breadCrumb }) => {
  return (
    <>
      <div className="flex items-center justify-center text-sm w-full py-2 gap-2">
        {breadCrumb.map((i, index) => {
          return (
            <Link href={i.link} key={index} className="">
              {index === breadCrumb.length - 1 ? (
                <p className="text-hmred font-bold"> {i.path}</p>
              ) : (
                <p>{i.path} / </p>
              )}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default BreadCrumbs
