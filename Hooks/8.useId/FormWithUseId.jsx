import React, { useId } from 'react';

const FormUseId = () => {
    const nameId = useId(); // Tạo ID duy nhất cho trường "Tên"
    const emailId = useId(); // Tạo ID duy nhất cho trường "Email"

    return (
        <form>
            <div>
                <label htmlFor={nameId}>Name:</label>
                <input id={nameId} type="text" placeholder="Nhập tên của bạn" />
            </div>
            <div>
                <label htmlFor={emailId}>Email:</label>
                <input id={emailId} type="email" placeholder="Nhập email của bạn" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormUseId;
