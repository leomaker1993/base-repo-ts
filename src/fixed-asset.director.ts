import {FixedAssetBuilder} from './builder'
/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
 class Director {
    private fixedAssetBuilder: FixedAssetBuilder;

    /**
     * The Director works with any builder instance that the client code passes
     * to it. This way, the client code may alter the final type of the newly
     * assembled product.
     */
    public setBuilder(fixedAssetBuilder: FixedAssetBuilder): void {
        this.fixedAssetBuilder = fixedAssetBuilder;
    }

    

    /**
     * The Director can construct several product variations using the same
     * building steps.
     */

     public buildComputer(): void {
        this.fixedAssetBuilder.producePartA();
    }

    public buildTable(): void {
        this.fixedAssetBuilder.producePartA();
    }

    public buildChair(): void {
        this.fixedAssetBuilder.producePartA();
    }

    public buildMinimalViableProduct(): void {
        this.fixedAssetBuilder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.fixedAssetBuilder.producePartA();
        this.fixedAssetBuilder.producePartB();
        this.fixedAssetBuilder.producePartC();
    }
}