import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddMovieResponse = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  imdb_id: Scalars['String'];
  movie: Movie;
  movie_list_id: Scalars['Int'];
};

export type CreateListInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type CreateTodoListInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Movie = {
  Actors?: Maybe<Scalars['String']>;
  Awards?: Maybe<Scalars['String']>;
  BoxOffice?: Maybe<Scalars['String']>;
  Country?: Maybe<Scalars['String']>;
  DVD?: Maybe<Scalars['String']>;
  Director?: Maybe<Scalars['String']>;
  Genre?: Maybe<Scalars['String']>;
  Language?: Maybe<Scalars['String']>;
  Metascore?: Maybe<Scalars['String']>;
  Plot?: Maybe<Scalars['String']>;
  Poster?: Maybe<Scalars['String']>;
  Production?: Maybe<Scalars['String']>;
  Rated?: Maybe<Scalars['String']>;
  Ratings?: Maybe<Array<Maybe<Rating>>>;
  Released?: Maybe<Scalars['String']>;
  Response?: Maybe<Scalars['String']>;
  Runtime?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Writer?: Maybe<Scalars['String']>;
  Year?: Maybe<Scalars['String']>;
  imdbID?: Maybe<Scalars['String']>;
  imdbRating?: Maybe<Scalars['String']>;
  imdbVotes?: Maybe<Scalars['String']>;
};

export type MovieList = {
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type MovieListItem = {
  created_at: Scalars['String'];
  id: Scalars['Int'];
  imdb_id: Scalars['String'];
  movie: Movie;
  movie_list_id: Scalars['Int'];
};

export type Mutation = {
  addMovie: AddMovieResponse;
  addTODO: TodoListItem;
  createList: MovieList;
  createTODOList: TodoList;
  deleteList: Scalars['Boolean'];
  deleteTODOList: Scalars['Boolean'];
  finishTODO: TodoListItem;
  removeMovie: Scalars['Boolean'];
  removeTODO: Scalars['Boolean'];
};


export type MutationAddMovieArgs = {
  imdbId: Scalars['String'];
  listId: Scalars['Int'];
};


export type MutationAddTodoArgs = {
  desc: Scalars['String'];
  listId: Scalars['Int'];
};


export type MutationCreateListArgs = {
  input: CreateListInput;
};


export type MutationCreateTodoListArgs = {
  input: CreateTodoListInput;
};


export type MutationDeleteListArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTodoListArgs = {
  id: Scalars['Int'];
};


export type MutationFinishTodoArgs = {
  id: Scalars['Int'];
  listId: Scalars['Int'];
};


export type MutationRemoveMovieArgs = {
  id: Scalars['Int'];
  listId: Scalars['Int'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['Int'];
  listId: Scalars['Int'];
};

export type Query = {
  getMovieList: MovieList;
  getMovieListItems: Array<MovieListItem>;
  getMovieLists: Array<MovieList>;
  getTODOList: TodoList;
  getTODOLists: Array<TodoList>;
  getTODOs: Array<TodoListItem>;
  searchMovieById?: Maybe<Movie>;
  searchMovieByTitle?: Maybe<Array<Maybe<SearchMovie>>>;
};


export type QueryGetMovieListArgs = {
  id: Scalars['Int'];
};


export type QueryGetMovieListItemsArgs = {
  listId: Scalars['Int'];
};


export type QueryGetMovieListsArgs = {
  email: Scalars['String'];
};


export type QueryGetTodoListArgs = {
  id: Scalars['Int'];
};


export type QueryGetTodoListsArgs = {
  email: Scalars['String'];
};


export type QueryGetTodOsArgs = {
  listId: Scalars['Int'];
};


export type QuerySearchMovieByIdArgs = {
  id: Scalars['String'];
};


export type QuerySearchMovieByTitleArgs = {
  title: Scalars['String'];
  year?: InputMaybe<Scalars['String']>;
};

export type Rating = {
  Source?: Maybe<Scalars['String']>;
  Value?: Maybe<Scalars['String']>;
};

export type SearchMovie = {
  Poster?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Type?: Maybe<Scalars['String']>;
  Year?: Maybe<Scalars['String']>;
  imdbID?: Maybe<Scalars['String']>;
};

export type TodoList = {
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TodoListItem = {
  created_at: Scalars['String'];
  desc: Scalars['String'];
  finished: Scalars['Boolean'];
  id: Scalars['Int'];
  todo_list_id: Scalars['Int'];
};

export type AddMovieMutationVariables = Exact<{
  listId: Scalars['Int'];
  imdbId: Scalars['String'];
}>;


export type AddMovieMutation = { addMovie: { id: number, movie: { imdbID?: string | null, Title?: string | null, Poster?: string | null, imdbRating?: string | null, Year?: string | null, Genre?: string | null } } };

export type CreateListMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateListMutation = { createList: { id: number, name: string } };

export type RemoveListMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveListMutation = { deleteList: boolean };

export type RemoveMovieMutationVariables = Exact<{
  listId: Scalars['Int'];
  movieId: Scalars['Int'];
}>;


export type RemoveMovieMutation = { removeMovie: boolean };

export type GetMovieQueryVariables = Exact<{
  imdbId: Scalars['String'];
}>;


export type GetMovieQuery = { searchMovieById?: { Title?: string | null, Poster?: string | null, Year?: string | null, Actors?: string | null, Director?: string | null, Genre?: string | null, imdbRating?: string | null } | null };

export type GetMovieListQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMovieListQuery = { getMovieList: { name: string }, getMovieListItems: Array<{ id: number, movie: { imdbID?: string | null, Title?: string | null, Poster?: string | null, imdbRating?: string | null, Year?: string | null, Genre?: string | null } }> };

export type GetMovieListsQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetMovieListsQuery = { getMovieLists: Array<{ id: number, name: string }> };

export type SearchMovieByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SearchMovieByTitleQuery = { searchMovieByTitle?: Array<{ imdbID?: string | null, Title?: string | null, Poster?: string | null } | null> | null };


export const AddMovieDocument = /*#__PURE__*/ gql`
    mutation addMovie($listId: Int!, $imdbId: String!) {
  addMovie(listId: $listId, imdbId: $imdbId) {
    id
    movie {
      imdbID
      Title
      Poster
      imdbRating
      Year
      Genre
    }
  }
}
    `;
export const CreateListDocument = /*#__PURE__*/ gql`
    mutation createList($name: String!, $email: String!) {
  createList(input: {name: $name, email: $email}) {
    id
    name
  }
}
    `;
export const RemoveListDocument = /*#__PURE__*/ gql`
    mutation removeList($id: Int!) {
  deleteList(id: $id)
}
    `;
export const RemoveMovieDocument = /*#__PURE__*/ gql`
    mutation removeMovie($listId: Int!, $movieId: Int!) {
  removeMovie(listId: $listId, id: $movieId)
}
    `;
export const GetMovieDocument = /*#__PURE__*/ gql`
    query getMovie($imdbId: String!) {
  searchMovieById(id: $imdbId) {
    Title
    Poster
    Year
    Actors
    Director
    Genre
    imdbRating
  }
}
    `;
export const GetMovieListDocument = /*#__PURE__*/ gql`
    query getMovieList($id: Int!) {
  getMovieList(id: $id) {
    name
  }
  getMovieListItems(listId: $id) {
    id
    movie {
      imdbID
      Title
      Poster
      imdbRating
      Year
      Genre
    }
  }
}
    `;
export const GetMovieListsDocument = /*#__PURE__*/ gql`
    query getMovieLists($email: String!) {
  getMovieLists(email: $email) {
    id
    name
  }
}
    `;
export const SearchMovieByTitleDocument = /*#__PURE__*/ gql`
    query searchMovieByTitle($title: String!) {
  searchMovieByTitle(title: $title) {
    imdbID
    Title
    Poster
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addMovie(variables: AddMovieMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddMovieMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddMovieMutation>(AddMovieDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addMovie', 'mutation');
    },
    createList(variables: CreateListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateListMutation>(CreateListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createList', 'mutation');
    },
    removeList(variables: RemoveListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveListMutation>(RemoveListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeList', 'mutation');
    },
    removeMovie(variables: RemoveMovieMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveMovieMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveMovieMutation>(RemoveMovieDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeMovie', 'mutation');
    },
    getMovie(variables: GetMovieQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMovieQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMovieQuery>(GetMovieDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMovie', 'query');
    },
    getMovieList(variables: GetMovieListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMovieListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMovieListQuery>(GetMovieListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMovieList', 'query');
    },
    getMovieLists(variables: GetMovieListsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMovieListsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMovieListsQuery>(GetMovieListsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMovieLists', 'query');
    },
    searchMovieByTitle(variables: SearchMovieByTitleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchMovieByTitleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchMovieByTitleQuery>(SearchMovieByTitleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchMovieByTitle', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;