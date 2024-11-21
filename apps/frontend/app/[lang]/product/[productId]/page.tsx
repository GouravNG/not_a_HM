import BreadCrumbs from '@/components/atom/breadCrumbs.component'
import ProductDescription from '@/components/templates/pdp.component'   
import { breadCrumb } from '@/dummyData'
import { Suspense } from 'react'

const PDP = async ({ params }: { params: { productId: string } }) => {
    return (
        <div className="px-4">
            <BreadCrumbs breadCrumb={breadCrumb} />
            <Suspense fallback={<h1>Hmmm...</h1>}>
                <ProductDescription productId={params.productId} />
            </Suspense>
            {/* TODO: Need to add upsell and cross sell product */}
        </div>
    )
}
export default PDP
