import { NoteProps} from "../types/noteProps";

export default function Note({ noteTitle, noteText, noteDate }: NoteProps) {
  return (
          <>
            <div>
              <h3>Note:</h3>
              <p>
                Title: {noteTitle}, Text: {noteText}, Date: {noteDate}
              </p>
            </div>
        </>
  );
}

