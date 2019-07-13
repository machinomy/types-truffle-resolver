declare module 'truffle-resolver' {
    import truffle from 'truffle-contract'

    namespace Resolver {
    }

    interface ResolverConfig {
        working_directory: string
        contracts_build_directory: string
    }

    class Resolver {
        constructor (config: ResolverConfig)
        require<A> (importPath: string, searchPath?: string): truffle.TruffleContract<A>
    }

    export = Resolver
}
