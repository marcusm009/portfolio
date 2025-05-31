import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import * as constants from './constants';
import { MemoryRouter } from 'react-router-dom';

// Mock Three.js
jest.mock('three', () => ({
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
    render: jest.fn(),
    get domElement() { return global.document.createElement('canvas'); }
  })),
  Scene: jest.fn().mockImplementation(() => ({
    position: { clone: jest.fn(() => ({ x: 0, y: 0, z: 0 })) }
  })),
  PerspectiveCamera: jest.fn(),
  BoxGeometry: jest.fn(),
  MeshBasicMaterial: jest.fn(),
  Mesh: jest.fn(),
  Color: jest.fn(),
  Vector3: jest.fn(),
  AmbientLight: jest.fn(),
  DirectionalLight: jest.fn(),
  AxesHelper: jest.fn(),
  GridHelper: jest.fn(),
  OrthographicCamera: jest.fn()
}));

// Mock the router hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null
  }),
  useHistory: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn()
  })
}));

jest.mock('./react-components/CanvasSwitcher', () => () => <div>Mocked CanvasSwitcher</div>);
jest.mock('./react-components/Canvas', () => () => <div>Mocked Canvas</div>);

describe('App Component', () => {
  const renderWithRouter = (component) => {
    return render(
      <MemoryRouter initialEntries={['/']}>
        {component}
      </MemoryRouter>
    );
  };

  test('renders welcome page initially', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Please choose a mode:/i)).toBeInTheDocument();
  });

  test('renders navigation bar', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('starts in classic mode when startClassic is clicked', () => {
    renderWithRouter(<App />);
    const classicButton = screen.getByText(/Classic/i);
    fireEvent.click(classicButton);
    // Welcome page should be dismissed
    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });

  test('starts in game mode when startGame is clicked', () => {
    renderWithRouter(<App />);
    const gameButton = screen.getByText(/Game/i);
    fireEvent.click(gameButton);
    // Welcome page should be dismissed
    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });
});
