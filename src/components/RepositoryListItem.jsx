export function RepositoryListItem({ repository }) {
    return (
        <li>
            <strong>{repository?.name ?? 'Sem nome'}</strong>
            <p>{repository?.description ?? 'Sem descrição'}</p>
            <a href={repository?.html_url ?? ''}>Acessar repositório</a>
        </li>
    )
}