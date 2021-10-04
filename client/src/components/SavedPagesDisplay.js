
export default function SavedPagesDisplay({page}) {

    return (
        <div className="saved-pages-class">
            <h1>{page.title}</h1>
            <p>{page.body_text}</p>
            <img className="preview-image-class" src={page.image_url} alt="your selected image"/>
        </div>
    )

}