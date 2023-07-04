import React, {useEffect, useState} from 'react';
import {BsSearch, BsYoutube} from 'react-icons/bs';
import {useNavigate} from "react-router";
import {Link, useParams} from "react-router-dom";

function SearchHeader(props) {
    const navigate = useNavigate();
    const {keyword} = useParams();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }

    // useEffect(function, deps) // function : 실행하고자 하는 함수, deps: 배열형태, function을 실행시킬 조건.
    // deps에 특정값을 넣게 되면 컴포넌트가 mount 될때, 지정한 값이 업데이트 될 때 useEffect를 실행한다.
    useEffect(() => setText(keyword || ''), [keyword]);
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex item-center'>
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            <form onSubmit={handleSubmit} className='w-full flex justify-center'>
                <input className='w-7/12 outline-none bg-black text-gray-5' type="text" placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)}/>
                <button className='bg-zinc-600 px-4'>
                    <BsSearch/>
                </button>
            </form>

        </header>
    );
}

export default SearchHeader;