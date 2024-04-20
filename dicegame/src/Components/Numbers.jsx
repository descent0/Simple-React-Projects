

const Numbers = ({ number, onClick, isSelected }) => {
    return (
        <div onClick={onClick} className={`flex h-[72px] w-[72px] text-[24px] font-bold border-2 border-black justify-center items-center ${isSelected ? 'bg-black text-white' : ''}`}>
            {number}
        </div>
    )
}

export default Numbers
