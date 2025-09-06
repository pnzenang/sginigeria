import { useAllMembersContext } from '../pages/AllMembers';
import { ComplexPaginationContainer } from '../components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import Member from './Member';

// import PageBtnContainer from './PageBtnContainer';
import { useState } from 'react';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link, useOutletContext, Form } from 'react-router-dom';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
day.extend(advancedFormat);

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 pl-3 text-[15px] font-bold text-white lg:py-7 lg:px-4 uppercase`,
  TdStyle: `text-dark border-b  border-primary bg-base-100  py-5 pl-12 text-left text-[15px]  font-medium uppercase`,
  TdStyle2: `text-dark border-b border-primary bg-base-100  py-5 pl-12 text-left text-[15px] font-medium uppercase`,
};

const MembersContainer = () => {
  const { user } = useOutletContext();
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: 'Print This Document',
    removeAfterPrint: true,
  });

  const [layout, setLayout] = useState('list');
  const setActiveStyles = (pattern) => {
    return `text-xl btn  btn-sm  ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : ' text-primary border-primary rounded-lg'
    }`;
  };
  const { data } = useAllMembersContext();
  const { members, numOfPages, totalMembers } = data;
  return (
    <section>
      <div className='flex justify-between'>
        <div>
          <h5 className='pb-1 text-2xl'>
            {totalMembers} member{members.length > 1 && 's'} found
          </h5>
        </div>

        <div className='flex gap-x-2'>
          <button
            onClick={() => {
              handlePrint(null, () => contentToPrint.current);
            }}
            className='btn btn-sm bg-success  text-white text-xs sm:text-sm'
          >
            PRINT LIST
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list ')}
          >
            <BsList />
          </button>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
        </div>
      </div>
      <div className=' border-b mt-1 border-primary mx-auto mb-3'></div>

      <div ref={contentToPrint}>
        {members.length === 0 ? (
          <h4 className='text-2xl mt-16 '>
            Welcome Delegate, your association has no members in this category
            at this time.
          </h4>
        ) : layout === 'grid' ? (
          <>
            <ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 pb-4 '>
              {members.map((member) => {
                return <Member key={member._id} {...member} />;
              })}
            </ul>
            {numOfPages > 1 && <ComplexPaginationContainer />}
          </>
        ) : (
          <>
            <section className=' '>
              <div className=''>
                <div className='flex flex-wrap '>
                  <div className='w-full '>
                    <div className='max-w-full overflow-x-auto'>
                      <table className='w-full  table table-zebra'>
                        <thead className='text-center bg-primary'>
                          <tr>
                            <th className={TdStyle.ThStyle}> Sponsor Code </th>
                            <th className={TdStyle.ThStyle}> Matriculation </th>

                            <th className={TdStyle.ThStyle}>Family Names </th>
                            <th className={TdStyle.ThStyle}> First Names </th>
                            {/* <th className={TdStyle.ThStyle}>Date of Birth</th> */}
                            <th className={TdStyle.ThStyle}>
                              Registration Date{' '}
                            </th>
                            <th className={TdStyle.ThStyle}>Recommendation </th>
                            <th className={TdStyle.ThStyle}> Status </th>
                            <th className={TdStyle.ThStyle}> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {members.map((member) => {
                            console.log(member);
                            const {
                              _id,
                              associationCode,
                              memberMatriculation,
                              firstName,
                              lastAndMiddleNames,
                              // dateOfBirth,
                              createdAt,
                              delegateRecommendation,
                              memberStatus,
                            } = member;
                            const time = day(Date.now());
                            const tod = day(createdAt.toString());
                            const m = time.diff(tod, 'days');

                            const matriculationSituation =
                              memberStatus === 'pending' || m < 90
                                ? 'pending'
                                : memberMatriculation;
                            const date = day(createdAt).format('MMM Do, YYYY');
                            // const date2 = day(dateOfBirth)
                            //   .add(22, 'hour')
                            //   .format('MMM Do, YYYY');

                            return (
                              <tr key={_id}>
                                <td className={TdStyle.TdStyle}>
                                  {associationCode}
                                </td>
                                <td className={TdStyle.TdStyle2}>
                                  {matriculationSituation}
                                </td>

                                <td className={TdStyle.TdStyle2}>
                                  {lastAndMiddleNames}
                                </td>
                                <td className={TdStyle.TdStyle}>{firstName}</td>
                                {/* <td className={TdStyle.TdStyle}>{date2}</td> */}
                                <td className={TdStyle.TdStyle}>{date}</td>
                                <td className={TdStyle.TdStyle}>
                                  {delegateRecommendation}
                                </td>
                                <td className={TdStyle.TdStyle}>
                                  {memberStatus}
                                </td>
                                <td className={TdStyle.TdStyle}>
                                  <div className=' flex py-2 gap-6 items-center justify-center'>
                                    {user.role === 'user' ? (
                                      <Link
                                        to={`/dashboard/edit-member/${_id}`}
                                        className='btn-xm bg-secondary rounded capitalize px-2 py-1 truncate text-white'
                                      >
                                        <FaPencil className='w-6 h-6' />
                                      </Link>
                                    ) : (
                                      <>
                                        <Link
                                          to={`/dashboard/admin-edit-member/${_id}`}
                                          className='btn-xm bg-secondary rounded capitalize px-2 py-1 truncate text-white'
                                        >
                                          <FaPencil className='w-6 h-6' />
                                        </Link>
                                        <Form
                                          method='post'
                                          action={`/dashboard/delete-member/${_id}`}
                                        >
                                          <button
                                            type='submit'
                                            className='btn-xm bg-red-600 rounded capitalize px-2 py-1 truncate text-white'
                                          >
                                            <FaTrashCan className='w-6 h-6' />
                                          </button>
                                        </Form>
                                      </>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {numOfPages > 1 && <ComplexPaginationContainer />}
          </>
        )}
      </div>
    </section>
  );
};
export default MembersContainer;
