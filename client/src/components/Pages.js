import { useEffect, useState } from "react";
import SavedPagesDisplay from './SavedPagesDisplay'

export default function Pages() {

    const [savedPages, setSavedPages] = useState([])

    useEffect(() => {
        fetch("/preview_pages")
        .then((r) => r.json())
        .then((data) => setSavedPages(data));
      }, [])

      console.log(savedPages)

    return (
        <div>
            <h1>Saved Pages:</h1>
            {savedPages.map(page => <SavedPagesDisplay key={page.id} page={page} />)}
        </div>
    )

}