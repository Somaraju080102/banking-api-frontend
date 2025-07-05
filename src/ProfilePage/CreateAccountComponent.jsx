import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateAccountComponent() {

        const token = localStorage.getItem('token');
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        }

  const formik = useFormik({
    initialValues: {
      accountNumber: '',
      bankName: '',
      accountType: '',
      balance: '500', // Default balance set to 500
    },
    validationSchema: Yup.object({
      accountNumber: Yup.string().required('Account number is required'),
      bankName: Yup.string().required('Bank name is required'),
      accountType: Yup.string().required('Account type is required'),
      balance: Yup.number().required('Balance is required').min(500, 'Minimum balance must be ₹500'),
    }),
    onSubmit: async (values) => {
      console.log('Account data:', values);
      try{
        const response=await axios.post("http://localhost:8080/api/accounts", values)
      }
        catch (error) {
            console.error('Error creating account:', error);
            alert('Failed to create account. Please try again.');
        }
      
    },
  });

  return (
    <div className="p-6 w-full max-w-xl mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800 dark:text-white">Create New Bank Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                name="accountNumber"
                value={formik.values.accountNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.accountNumber && formik.errors.accountNumber && (
                <p className="text-red-500 text-xs">{formik.errors.accountNumber}</p>
              )}
            </div>

            <div>
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                name="bankName"
                value={formik.values.bankName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.bankName && formik.errors.bankName && (
                <p className="text-red-500 text-xs">{formik.errors.bankName}</p>
              )}
            </div>

            <div>
              <Label htmlFor="accountType">Account Type</Label>
              <Input
                id="accountType"
                name="accountType"
                value={formik.values.accountType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Savings / Current"
              />
              {formik.touched.accountType && formik.errors.accountType && (
                <p className="text-red-500 text-xs">{formik.errors.accountType}</p>
              )}
            </div>

            <div>
              <Label htmlFor="balance">Balance</Label>
              <Input
                id="balance"
                name="balance"
                type="number"
                value={formik.values.balance}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.balance && formik.errors.balance && (
                <p className="text-red-500 text-xs">{formik.errors.balance}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
