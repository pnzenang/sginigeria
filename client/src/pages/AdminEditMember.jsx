import { FormInput, SubmitBtn, FormSelect } from '../components';

import {
  Form,
  redirect,
  useOutletContext,
  useLoaderData,
} from 'react-router-dom';
import {
  MEMBER_STATUS,
  DELEGATE_RECOMMENDATIONS,
} from '../../../utils/constants';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  console.log(params);

  try {
    const { data } = await customFetch.get(`/members/${params.id}`);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-members-admin');
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(
      `/users/admin/admin-edit-member/${params.id}`,
      data
    );
    toast.success('member edited successfully');
    return redirect('/dashboard/all-members-admin');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AdminEditMember = () => {
  const { member } = useLoaderData();
  const { user } = useOutletContext();

  return (
    <section className='h-full grid  place-items-center mt-20 '>
      <Form
        method='POST'
        className='card w-96 lg:w-full px-8 pb-20 pt-10 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary '
      >
        <h4 className='text-start text-3xl font-bold my-8 capitalize'>
          {user.role === 'user' ? 'edit recommendation' : 'edit member status'}
        </h4>
        <div className='grid  lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='sponsor code'
              name='associationCode'
              value={member.associationCode}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='sponsor code'
              name='associationCode'
              defaultValue={member.associationCode}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='member first names'
              name='firstName'
              value={member.firstName}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='member first names'
              name='firstName'
              defaultValue={member.firstName}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='member last and middle names'
              name='lastAndMiddleNames'
              value={member.lastAndMiddleNames}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='member last and middle names'
              name='lastAndMiddleNames'
              defaultValue={member.lastAndMiddleNames}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='member date of birth'
              name='dateOfBirth'
              value={member.dateOfBirth}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='member date of birth'
              name='dateOfBirth'
              defaultValue={member.dateOfBirth}
              onChange={() => null}
            />
          )}

          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='member country of birth'
              name='countryOfBirth'
              value={member.countryOfBirth}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='member city of birth'
              name='countryOfBirth'
              defaultValue={member.countryOfBirth}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormSelect
              label='sponsor recommendation'
              name='delegateRecommendation'
              defaultValue={member.delegateRecommendation}
              list={Object.values(DELEGATE_RECOMMENDATIONS)}
            />
          ) : (
            <FormSelect
              label='sponsor recommendation'
              name='delegateRecommendation'
              defaultValue={member.delegateRecommendation}
              list={Object.values(DELEGATE_RECOMMENDATIONS)}
            />
          )}
          {user.role === 'user' ? (
            <FormSelect
              label='member status'
              name='memberStatus'
              defaultValue={member.memberStatus}
              list={[MEMBER_STATUS.PENDING]}
            />
          ) : (
            <FormSelect
              label='member status'
              name='memberStatus'
              defaultValue={member.memberStatus}
              list={Object.values(MEMBER_STATUS)}
            />
          )}
          <div className='mt-9'>
            <SubmitBtn text='submit' />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default AdminEditMember;
