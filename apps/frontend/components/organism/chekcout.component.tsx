import BillingAddress from '@/forms/billingAddress.form'
import MyInformationForm from '@/forms/myInfo.form'

const CheckoutForm = () => {
    return (
        <div className="flex flex-col gap-4">
            <MyInformationForm />
            <BillingAddress />
        </div>
    )
}
export default CheckoutForm
