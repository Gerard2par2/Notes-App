import Link from "next/link";

async function getNotes(){
    const res = await fetch('https://notes-app.pockethost.io/api/collections/nextjsfirstapp/records?page=1&perPage=30',
        {cache :'no-store'}
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage(){
    const notes = await getNotes();
    return(
        <div>
            <h1>Notes</h1>
            <div className='notesSection'>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note}/>;
                })}
            </div>
        </div>
    );
}

function Note({note}:any){
    const {id,title,description,created} = note || {};
    return(
        <Link href={`./notes/${id}`}>
            <div className='note'>
                <h2>{title}</h2>
                <h5>{description}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );  
}