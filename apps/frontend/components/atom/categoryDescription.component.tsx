type CategoryDescriptionTypes = {
    categoryName: string
    categoryDescription: string
}
const CategoryDescription: React.FC<CategoryDescriptionTypes> = ({ categoryName, categoryDescription }) => {
    return (
        <div className="">
            <div className="text-center md:text-start text-3xl md:text-3xl py-2">{categoryName}</div>
            <div className="text-sm line-clamp-3 max-w-3xl leading-loose">{categoryDescription}</div>
        </div>
    )
}
export default CategoryDescription

// overflow-hidden text-ellipsis max-h-[4.5rem] leading-[1.5rem] text-sm md:max-w-5xl
