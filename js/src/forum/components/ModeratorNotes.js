import Component from 'flarum/common/Component';
import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import NoteListItem from './NoteListItem';
import Button from 'flarum/common/components/Button';
import NoteCreate from './ModeratorNotesCreate';
import listItems from 'flarum/common/helpers/listItems';
import ItemList from 'flarum/common/utils/ItemList';

export default class ModeratorNotes extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.loading = true;
    this.notes = [];
    this.refresh();
  }

  view() {
    return (
      <div className="ModeratorNotesList">
        <h1 className="ModeratorNotesList-notes">{app.translator.trans('fof-moderator-notes.forum.user.notes')}</h1>
        <div class="ModeratorNotes-toolbar">
          <ul className="ModeratorNotes-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
        </div>
        {this.loading ? (
          <LoadingIndicator display="block" />
        ) : (
          <ul className="ModeratorNotesList-discussions">
            {this.notes.map((note) => {
              return (
                <li key={note.id()} data-id={note.id()}>
                  {NoteListItem.component({ note })}
                </li>
              );
            })}
            {!this.loading && this.notes.length === 0 && <label>{app.translator.trans('fof-moderator-notes.forum.moderatorNotes.noNotes')}</label>}
          </ul>
        )}
      </div>
    );
  }

  actionItems() {
    const items = new ItemList();
    const canCreateNote = app.session.user.canCreateModeratorNotes();

    items.add(
      'create_note',
      Button.component(
        {
          className: 'Button Button--primary',
          onclick: this.handleOnClickCreate.bind(this),
          disabled: !canCreateNote,
        },
        app.translator.trans('fof-moderator-notes.forum.moderatorNotes.add_button')
      )
    );

    return items;
  }

  parseResults(results) {
    [].push.apply(this.notes, results);
    this.loading = false;
    m.redraw();

    return results;
  }

  refresh() {
    return app.store.find('notes', this.attrs.params.user.id()).then(
      (results) => {
        this.notes = [];
        this.parseResults(results);
      },
      () => {
        this.loading = false;
        m.redraw.sync();
      }
    );
  }

  handleOnClickCreate(e) {
    e.preventDefault();
    app.modal.show(NoteCreate, {
      callback: this.refresh.bind(this),
      ...this.attrs.params,
    });
  }
}
