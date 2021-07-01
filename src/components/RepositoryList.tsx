import { RepositoryListItem } from "./RepositoryListItem"
import '../styles/repository.scss'
import { useState, useEffect } from "react"

interface Repository {
    name: string
    description: string
    html_url: string
}

export function RepositoryList() {
    const [repositories,setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/claudiostocco/repos')
        .then(response => response.json())
        .then(dados => setRepositories(dados))
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => 
                    <RepositoryListItem key={repository.name} repository={repository}/>
                )}
            </ul>
        </section>
    )
}