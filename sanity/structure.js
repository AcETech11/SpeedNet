// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('SpeedNet DashBoard')
    .items([
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      S.documentTypeListItem('comment').title('Comment'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'category', 'comment'].includes(item.getId()),
      ),
    ])
