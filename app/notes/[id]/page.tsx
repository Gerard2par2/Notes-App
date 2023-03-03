async function getNote(noteId:string){
    const res = await fetch(`https://notes-app.pockethost.io/api/collections/notes/records/${noteId}`,
        {next : {revalidate :10}}
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({params}:any){
    const note = await getNote(params.id);
    console.log(note);
    return(
        <div className='noteContainer'>
            <h1>Notes/{note.id}</h1>
            <div className='note'>
                    <h3>{note.title}</h3>
                    <h5>{note.description}</h5>
                    <p>{note.created}</p>
            </div>
        </div>
    );
}