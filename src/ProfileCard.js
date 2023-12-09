export default function ProfileCard({ color, image, description }) {

    return (
        <div className="card">
            <div className="card-image">
                <figure className="imag is-1by1">
                    <img src={image} alt="hello world" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{color}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}
