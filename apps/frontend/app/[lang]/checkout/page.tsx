import CheckoutForm from '@/components/organism/chekcout.component'

const CheckoutPage = () => {
    return (
        <div className="bg-hmBackgroundColor">
            <h2 className="text-center text-2xl md:text-3xl font-bold py-8 pt-24 md:pt-8">Checkout</h2>
            <div className="flex flex-col md:flex-row w-full md:px-20 md:gap-10 md:p-6">
                <div className="md:w-[65%]">
                    <CheckoutForm />
                </div>
                <div className="border border-black md:w-[35%]">T</div>
            </div>
        </div>
    )
}
export default CheckoutPage
