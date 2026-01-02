export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 py-2.5 bg-black">
      <h2 className="text-white font-semibold">OZ코딩스쿨</h2>

      <ul className="flex gap-5">
        <li className="list-none font-normal text-[13px] text-white">
          로그인
        </li>
        <li className="list-none font-normal text-[13px] text-white">
          회원가입
        </li>
        <li className="list-none font-normal text-[13px] text-white">
          내클래스
        </li>
      </ul>
    </header>
  );
}
