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
      <div className="flex items-center justify-center text-[.7rem] w-full p-1 gap-2">
        {breadCrumb.map((i, index) => {
          return (
            <Link href={i.link} key={index} className="">
              {index === breadCrumb.length - 1 ? (
                <p className="text-red-700 font-bold">{i.path}</p>
              ) : (
                <p >{i.path} / </p>
              )}
            </Link>
          )
        })}
        {/* HM.com /subcategory /mainCategory */}
      </div>
    </>
  )
}

export default BreadCrumbs
