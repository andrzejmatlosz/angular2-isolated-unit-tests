import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
    let simpleComponent: SimpleComponent;

    beforeEach(() => {
        simpleComponent = new SimpleComponent();
    });

    it('should create component', () => {
        expect(simpleComponent).toBeDefined();
    });

    it('should details be hidden on the begining', () => {
        expect(simpleComponent.showDetails).toBe(false);
    });

    it('should details be visible after toggle', () => {
        simpleComponent.toggleDetails();
        expect(simpleComponent.showDetails).toBe(true);
    });
});
