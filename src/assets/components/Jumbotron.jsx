import Button from "./Button"
import jumbotronImg from '../jumbotronImg.svg'

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <img src={jumbotronImg} alt="Gadai BPKB"/>
            <div className="right">
                <div className="text-section">
                    <h1>Solusi Cepat, Terpercaya & Mudah Untuk Kebutuhanmu.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Sagittis sit malesuada eu tristique magnis pulvinar. Curabitur eu non nisl auctor ut cras. Posuere gravida facilisi malesuada eget molestie sed. Scelerisque adipiscing egestas volutpat elit et vitae faucibus.</p>
                </div>
                <div className="button-section">
                    <Button btn="cta" text="Hitung Pinjaman Anda" url="#pinjaman" />
                    <Button btn="underline-btn" text="Lihat Syarat Yang Dibutuhkan" url="#" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron