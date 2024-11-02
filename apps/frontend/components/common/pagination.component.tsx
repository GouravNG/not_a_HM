import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

type PaginationType = {
    totalPages: number
}

const PaginationDesktop = ({ lastPage }: { lastPage: number }) => {
    return (
        <div className="w-full md:flex items-center justify-between hidden">
            <div>
                <IconChevronLeft height={40} width={40} stroke={1} />
            </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>...</div>
            <div>7</div>
            <div>8</div>
            <div>
                <IconChevronRight height={40} width={40} stroke={1} />
            </div>
        </div>
    )
}

const PaginationMoibile = ({ lastPage }: { lastPage: number }) => {
    return (
        <div className="md:hidden flex items-center justify-between w-full">
            <div>
                <IconChevronLeft height={40} width={40} stroke={1} />
            </div>
            <div>1</div>
            <div>/</div>
            <div>{lastPage}</div>
            <div>
                <IconChevronRight height={40} width={40} stroke={1} />
            </div>
        </div>
    )
}

const Pagination: React.FC<PaginationType> = ({ totalPages }) => {
    return (
        <>
            <PaginationMoibile lastPage={totalPages} />
            <PaginationDesktop lastPage={totalPages} />
        </>
    )
}
export default Pagination
