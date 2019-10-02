from django.test import TestCase

class DublinBusUnitTests(TestCase):

    # Setting up first "Dummy" test
    # Doing this to ensure Travis is set up correctly

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

if __name__ == '__main__':
    unittest.main(verbosity=2)
