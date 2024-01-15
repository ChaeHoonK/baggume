import styles from './TestComponent.module.css'

export default function TestComponent() {
    return (
        <div className={`columns-3 ${styles.container}`}>
            <p className='break-after-column'>111 안녕하세요 반갑습니다. 안녕하세요 반갑습니다. 안녕하세요 반갑습니다</p>
            <p className="hover:break-before-column hover:text-sky-400/30">222 반가워용 진짜로. 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다</p>
            <p>333 반가워요 진짜로. 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다</p>
            <p>444 반가워요 진짜로. 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다</p>
            <p>555 반가워요 진짜로. 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다</p>
        </div>
    )
}